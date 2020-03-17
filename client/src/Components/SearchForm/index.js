import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchForm = (props) => {

    return (<div className={props.className} >
        <Form>
            <FormGroup>
                <Label for="Book Search">Book Search</Label>
                <Input type="text" name="bookSearch" id="bookSearch" onChange={props.onChange} value={props.value} />
            </FormGroup>

            <Button onClick={props.onClick}>Submit</Button>
        </Form>
    </div>)



}

export default SearchForm
