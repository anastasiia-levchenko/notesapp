import {Button, Col, Form, Row, Stack} from "react-bootstrap";
import CreatableReactSelect from "react-select/creatable"
import {Link} from "react-router-dom";
import {type FormEvent, useRef, useState} from "react";
import type {NoteData, Tag} from "../App";

type NoteFormProps = {
    onSubmit: (note: NoteData) => void;
}

export function NoteForm(onSubmit: NoteFormProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const markdownRef = useRef<HTMLTextAreaElement>(null);
/*
    const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
*/

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

/*        onSubmit({
            title: titleRef.current!.value,
            markdown: markdownRef.current!.value,
            tags: []
        });*/
    }

    return (<Form onSubmit={handleSubmit}>
            <Stack gap={4}>
                <Row>
                    <Col>
                        <Form.Group controlId="title">
                            <Form.Label>Title</Form.Label>
                            <Form.Control ref={titleRef} required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="tags">
                            <Form.Label>Tags</Form.Label>
                            <CreatableReactSelect value={} isMulti/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group controlId="markdown">
                    <Form.Label>Body</Form.Label>
                    <Form.Control ref={markdownRef} required as="textarea" rows={15}/>
                </Form.Group>
                <Stack direction="horizontal" gap={3} className="justify-content-end">
                    <Button type="submit" variant="primary">Save</Button>
                    <Link to="..">
                        <Button type="button" variant="outline-secondary">
                            Cancel
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Form>
    )
}