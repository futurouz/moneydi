import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import firebase from 'firebase';

class renderMultiFileField extends Component {

    constructor(props) {
        super(props);
        this.state = {
            files: [],
            progress: 0
        };
        this.uploadFile = this.uploadFile.bind(this);
    }

    onDrop(files) {
        files.map((file) => {
            this.state.files.push({
                raw: file,
                isUploaded: false
            });
        });
        this.state.files.map((file, index) => {
            this.uploadFile(file, index);
        });
        this.setState({files: this.state.files});
    }
    
    uploadFile(file, index) {
        if(file.isUploaded) {
            return;
        }

        const that = this;
        const storageRef = firebase
            .storage()
            .ref()
            .child(this.props.storagePath + `${Date.now()}-${index}-${file.raw.name}`  )
            .put(file.raw);

        storageRef.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
            function (snapshot) {
                // Get task progress, including the number of bytes uploaded and the total
                // number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                const roundingProgress = progress.toFixed(2);
                this.setState({progress: roundingProgress})
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
                that.state.files[index].isUploaded = true;
                that.state.files[index].downloadUrl = downloadUrl;
                that.state.files[index].storagePath = storagePath;

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

    render() {
        const { input, label, required, help, meta: {touched, error}} = this.props;
        return (
            <div className="form-group">
                <label className="title">{label} {required && '*'}</label>
                <div>
                    <Dropzone
                        name={input.name}
                        onDrop={this.onDrop.bind(this)}
                        className={`form-control ${touched && error && 'is-invalid'} dropzone-container `}>
                        <p>กดหรือวางไฟล์ เพื่ออัพโหลดเอกสาร</p>
                        
                        {this.state.files.length > 0 &&
                        <div className="row">
                            <div className="col-md-12 col-xs-12">
                                <ul>
                                {
                                    this.state.files.map(f => 
                                        <div key={f.raw.name}>
                                            <li className="upload-list" >
                                                {f.raw.name} - {f.raw.size} bytes
                                            </li>
                                            <div className="progress">
                                                <div className="progress-bar" role="progressbar" aria-valuenow="70"
                                                    aria-valuemin="0" aria-valuemax="100" style={{width: `${this.state.progress}%`}}>
                                                        {this.state.progress}%
                                                </div>
                                            </div>
                                        </div>)
                                }
                                </ul>    
                            </div>
                        </div>
                        }
                    </Dropzone>
                    {touched && error && <div className="invalid-feedback">{error}</div>}
                    {help && <small id="emailHelp" className="form-text text-muted">{help}</small>}
                </div>
            </div>
        )
    }
}

export default renderMultiFileField