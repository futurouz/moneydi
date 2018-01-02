import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import firebase from 'firebase';

class renderMultiFileField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: [],
            progresses: []
        };
        this.uploadFile = this.uploadFile.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.deleteFile = this.deleteFile.bind(this);
    }

    onDrop(files, rejectedFiles) {
        if(rejectedFiles.length > 0 && this.props.onError) {
            this.props.onError("กรุณาเลือกประเภทหรือขนาดของไฟล์ให้ถูกต้อง");
            return;
        }

        const stateFiles = this.state.files;
        files.map((file) => {
            stateFiles.push({
                raw: file,
                isUploaded: false
            });
            return file;
        });

        const stateProgresses = this.state.progresses;
        stateFiles.map((file, index) => {
            if(!stateProgresses[index]) {
                stateProgresses[index] = 0;
            }
            this.uploadFile(file, index);
            return file;
        });

        this.setState({
            files: stateFiles,
            progresses: stateProgresses
        });
    }
    
    uploadFile(file, index) {
        if(file.isUploaded) {
            return;
        }

        const that = this;
        const storageRef = firebase.storage().ref()
            .child(this.props.storagePath + `${Date.now()}-${index}-${file.raw.name}`  )
            .put(file.raw);

        storageRef.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
                // Get task progress, including the number of bytes uploaded and the total
                // number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

                const progresses = this.state.progresses;
                progresses[index] = progress.toFixed(2);
                this.setState({
                    progresses: progresses
                });

                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                    default:
                }
            }.bind(this), function (error) {
                console.log(error);
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                switch (error.code) {
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        break;
                    case 'storage/canceled':
                        // User canceled the upload
                        break;
                    case 'storage/unknown':
                        // Unknown error occurred, inspect error.serverResponse
                        break;
                    default:
                }
            }, function () {
                // Upload completed successfully, now we can get the download URL
                const downloadUrl = storageRef.snapshot.downloadURL;
                const storagePath = storageRef.snapshot.metadata.fullPath;
                const stateFiles = that.state.files;
                stateFiles[index].isUploaded = true;
                stateFiles[index].downloadUrl = downloadUrl;
                stateFiles[index].storagePath = storagePath;
                that.setState({files: stateFiles});

                let transformedValues = that.state.files;
                transformedValues = transformedValues
                    .filter((file) => {
                        return file.isUploaded === true
                    })
                    .map((file) => {
                        return {
                            lastModified: file.raw.lastModified,
                            lastModifiedDate: file.raw.lastModifiedDate,
                            name: file.raw.name,
                            size: file.raw.size,
                            type: file.raw.type,
                            downloadUrl: file.downloadUrl,
                            storagePath: file.storagePath
                        };
                    });
                that.props.input.onChange(transformedValues);
            });
    }

    deleteFile(index) {
        const self = this;
        const stateFiles = self.state.files;
        const stateProgresses = self.state.progresses;
        const file = stateFiles[index];
        if(!window.confirm(`คุณต้องการลบไฟล์ ${file.raw.name} หรือไม่`)) {
            return;
        }

        const delRef = firebase.storage().ref().child(file.storagePath);
        delRef.delete().then(function() {
            console.log("delete file success");
        }).catch(function(error) {
            console.log(error);
        });

        stateFiles.splice(index, 1);
        stateProgresses.splice(index, 1);
        self.setState({
            files: stateFiles,
            progresses: stateProgresses
        });
    }

    render() {
        const { input, label, required, help, meta: {touched, error}, storagePath, ...props} = this.props;
        return (
            <div className="form-group">
                <label className="title">{label} {required && '*'}</label>
                <div>
                    {this.state.files.length > 0 &&
                        <div className="row mb-2">
                            <div className="col-md-12 col-xs-12">
                                <ul className="list-group">
                                    { this.state.files.map((file, index) =>
                                        <li className="list-group-item list-group-item-action justify-content-between" key={index}>
                                            <div className="upload-list" >
                                                {index+1}. {file.raw.name}
                                                <button type="button" className="close float-xl-right" aria-label="Close" onClick={() => {this.deleteFile(index)}}>
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            {this.state.progresses[index] < 100 &&
                                                <div className="progress">
                                                    <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                                         aria-valuemin="0" aria-valuemax="100" style={{width: `${this.state.progresses[index]}%`}}>
                                                        {this.state.progresses[index]}%
                                                    </div>
                                                </div>
                                            }
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    }
                    <Dropzone
                        {...props}
                        name={input.name}
                        acceptClassName="dropzone-accept"
                        rejectClassName="dropzone-reject"
                        activeClassName="dropzone-active"
                        onDrop={this.onDrop}
                        className={`form-control ${touched && error && 'is-invalid'} dropzone-container `}>
                        <p>กดหรือวางไฟล์ เพื่ออัพโหลดเอกสาร</p>
                    </Dropzone>
                    {touched && error && <div className="invalid-feedback">{error}</div>}
                    {help && <small id="emailHelp" className="form-text text-muted">{help}</small>}
                </div>
            </div>
        )
    }
}

export default renderMultiFileField