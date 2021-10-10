import React, {useState} from 'react';
import PageTitleComp from "../components/PageTitle.comp";
import "../styles/pages/ContactMe.css"
import "../styles/common.css"
import {Button, Card, Input} from "antd";
import {CheckCircleOutlined, SendOutlined} from "@ant-design/icons";
import 'react-quill/dist/quill.bubble.css';
import ReactQuill from "react-quill";

const ContactMe = () => {
    const [form, setForm] = useState({
        title: "",
        content: ""
    })

    const modules = {
        toolbar: [
            //[{ 'font': [] }],
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline','strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image'],
            [{ 'align': [] }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
            ['clean']
        ],
    }

    const formats = [
        //'font',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image',
        'align', 'color', 'background',
    ]

    return (
        <div className="contactme">
            <PageTitleComp text="Contact Me" />
            <br />
            <div className="card-margin" />

            <Card>
                <p id="subtitle"><CheckCircleOutlined /> 제가 필요하면 언제든 연락 주세요!</p>
            </Card>
            <div className="card-margin" />

            <div id="contact-box">
                <Card>
                    <div id="contact-container">
                        <Input placeholder="제목을 입력해주세요." onChange={(e) => setForm({ ...form, title: e.target.value })} value={form.title} />
                        <hr style={{ width: "100%", border: "1px solid #F0F0F0" }}/>
                        <ReactQuill
                            style={{height: 250}}
                            theme="bubble"
                            modules={modules}
                            formats={formats}
                            placeholder="여기에 내용을 입력하세요."
                            value={form.content || ''}
                            onChange={(content, delta, source, editor) => setForm({ ...form, content: editor.getHTML() })} />
                        <div className="card-margin" />
                        <Button type="primary" icon={<SendOutlined />}>전송</Button>
                    </div>
                </Card>
                <div className="card-margin" />
                <Card bodyStyle={{ width: "100%", height: "100%" }} title="이메일로 연락">
                    <div id="email-container">
                        <h1 id="email">5252bb@daum.net</h1>
                    </div>
                </Card>
            </div>

        </div>
    );
};

export default ContactMe;