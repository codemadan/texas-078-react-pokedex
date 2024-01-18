import {Alert, Button, Form, Input, Spin} from "antd";
import axios from "axios";
import {useState} from "react";
function App() {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const onFinish = (data) => {
        setIsSubmitting(true);
        console.log(data);
        // submit to api

        axios.post(
            'https://eo367xvj5dcmh00.m.pipedream.net',
            data
        )
            .then((response) => {
                console.warn(response)
                setIsSubmitting(false);

            })
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
                    <Spin spinning={isSubmitting}>
                    </Spin>
                </Form.Item>
            </Form>
        </>
    );
}

export default App;
