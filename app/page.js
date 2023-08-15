"use client";
import { Card, Input, Button, Form, Checkbox } from "antd";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen font-robo ">
      <div className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-4 lg:content-center lg:items-center ">
        {/* <img
      className="p-0 m-0 mb-8"
      src="src/assets/login.svg"
      alt="login-illustration"
    /> */}

        <Card
          className="w-80 h-90"
          style={{
            // width: 330,
            // height: 406,
            border: 2,
            borderColor: "#F0F0F0",
            borderStyle: "solid",
            background: "#FAFAFA",
          }}
        >
          <div className="flex justify-center">{/* need to add img */}</div>

          <p className="mt-5 mb-5">Log in</p>
          <Form
            initialValues={{
              remember: false,
            }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
            style={{ margin: 0, padding: 0 }}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "required",
                },
              ]}
              style={{ margin: 0, padding: 0 }}
            >
              <Input className="" placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "required",
                },
              ]}
              style={{ margin: 0, padding: 0 }}
            >
              <Input.Password className="mt-5" placeholder="Password" />
            </Form.Item>
            <Form.Item
              style={{ margin: 0, padding: 0 }}
              name="remember"
              valuePropName="checked"
            >
              <Checkbox className="pt-1 mt-1">Remember me</Checkbox>
            </Form.Item>

            <Form.Item style={{ margin: 0, padding: 0 }}>
              <Button
                style={{
                  borderRadius: 1,
                  backgroundColor: "black",
                }}
                className="mt-5"
                type="primary"
                block
                htmlType="submit"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
}
