import React from 'react';
import { Form, Button } from 'react-bootstrap';
import RecipeForm from './RecipeForm';


class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        };
    }

    handleFileChange = event => {
        this.setState({ selectedFile: event.target.files[0] });
    };

    handleSubmit = event => {
        console.log(event)
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', this.state.selectedFile);
        console.log(formData)
        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control type="file" accept="image/*"  onChange={this.handleFileChange} />
                </Form.Group>
                <br></br>
                {/* <Button variant="success" type="submit">Upload</Button> */}
            </Form>
        );
    }
}

export default ImageUpload;