import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import firebase from 'firebase';

class MutiFileField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            files: []
        };

    }

    onDrop(files) {
        this.state.files = this
            .state
            .files
            .concat(files)
        this.setState({files: this.state.files});

        files.map((file,index) => {
            this.uploadFile(file,index);
        });
    }
    
    uploadFile(file,index) {
        const storageRef = firebase
            .storage()
            .ref()
            .child(this.props.storagePath + `${Date.now()}-${index}-${file.name}`  )
            .put(file);

        storageRef.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
                function (snapshot) {
            // Get task progress, including the number of bytes uploaded and the total
            // number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                default:
            }
        }, function (error) {
            console.log(error)
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
            const downloadURL = storageRef.snapshot.downloadURL;
            console.log(downloadURL)
        });
    }

    render() {
        const {
            name,
            label,
            required,
            help,
            touched,
            error
        } = this.props;
        return (
            <div className="form-group">
                <label className="title">{label} {required && '*'}</label>
                <div>
                    <Dropzone
                        onDrop={this
                        .onDrop
                        .bind(this)}
                        className={`form-control ${touched && error && 'is-invalid'} dropzone-container `}>
                        <p>กดหรือวางไฟล์ เพื่ออัพโหลดเอกสาร</p>
                        {this.state.files.length > 0 && <ul>
                            {this
                                .state
                                .files
                                .map(f => <li key={f.name}>{f.name}
                                    - {f.size}
                                    bytes</li>)
}
                        </ul>
}
                    </Dropzone>
                    {touched && error && <div className="invalid-feedback">{error}</div>}
                    {help && <small id="emailHelp" className="form-text text-muted">{help}</small>}
                </div>
            </div>
        )
    }
}

export default MutiFileField