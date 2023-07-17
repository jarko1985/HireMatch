"use client";
import React from "react";
import { Button, Form, Radio, message } from "antd";
import Link from "next/link";

function Login() {
  const handleSubmit = (values: any) => {
    console.log(values);
  };
  return (
    <div className="flex justify-center h-screen items-center bg-primary">
      <div className="card p-5 w-450">
        <h1 className="text-xl">HireMatch - Login</h1>
        <hr />

        <Form
          layout="vertical"
          className="flex flex-col gap-5"
          onFinish={handleSubmit}
        >
          <Form.Item label="Email" name="email">
            <input type="email" className="input" />
          </Form.Item>

          <Form.Item label="Password" name="password">
            <input type="password" className="input" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Login
          </Button>

          <Link href="/register">Dont have an account? Register</Link>
        </Form>
      </div>
    </div>
  );
}

export default Login;
