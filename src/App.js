import {Alert, Button, Form, Input, Spin} from "antd";
import axios from "axios";
import {useState} from "react";
function App() {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userData, setUserData] = useState([]);

    const deletes = () => {
        localStorage.removeItem('first_name');
        window.location.reload();
    }

    const onFinish = (data) => {
        setIsSubmitting(true);
        // save to localstorage
        // localStorage.setItem('userdata',JSON.stringify(data));
        //
        // let _userData = localStorage.getItem('userdata');
        // _userData = JSON.parse(_userData);

        let first_name = data.first_name;
        let last_name = data.last_name;

        localStorage.setItem('first_name',first_name);
        localStorage.setItem('last_name',last_name);

        let _first = localStorage.getItem('first_name');
        let _last = localStorage.getItem('last_name');



        setIsSubmitting(false);

    }

    return (
        <>
            <h1>Form</h1>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="First Name"
                    name="first_name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your First Name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Last Name"
                    name="last_name"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>

                    <button type="button" onClick={ deletes }>
                        Delete First Name
                    </button>
                    <Spin spinning={isSubmitting}>
                    </Spin>
                </Form.Item>
            </Form>
        </>
    );
}

export default App;
