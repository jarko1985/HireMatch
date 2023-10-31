"use client";
import { Button, Col, Form, Row, Space } from "antd";
import React from "react";

function EmployeeForm() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Required" }]}
          >
            <input type="text" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Required" }]}
          >
            <input type="email" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item
            label="Phone"
            name="phone"
            rules={[{ required: true, message: "Required" }]}
          >
            <input type="number" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            label="Career Objective"
            name="careerObjective"
            rules={[{ required: true, message: "Required" }]}
          >
            <textarea />
          </Form.Item>
        </Col>
        </Row>
        
        {/* Education */}
        <div style={{marginTop:'50px'}}>
          <h1 className="text-md">Education</h1>
        <Form.List name="education">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Row key={key} gutter={[16,16]} align='bottom'>
                  <Col span={8}>
                    <Form.Item
                    className="my-2"
                      {...restField}
                      name={[name, "qualification"]}
                      rules={[{ required: true, message: "Required" }]}
                      label="Qualification"
                    >
                      <input type="text" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      name={[name, "institution"]}
                      rules={[{ required: true, message: "Required" }]}
                      label="Institution"
                    >
                      <input type="text" />
                    </Form.Item>
                  </Col>
                  <Col span={7}>
                    <Form.Item
                      {...restField}
                      name={[name, "percentage"]}
                      rules={[{ required: true, message: "Required" }]}
                      label="Percentage"
                    >
                      <input type="text" />
                    </Form.Item>
                  </Col>
                  <i
                    className="ri-delete-bin-line"
                    onClick={() => remove(name)}
                  ></i>
                </Row>
              ))}
              <Form.Item className="my-3">
                <Button type="dashed" onClick={() => add()} block>
                  Add Qualification
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        </div>
        {/* Skills */}
        <div style={{marginTop:'50px'}}>
          <h1 className="text-md">Skills</h1>
        <Form.List name="skills">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Row key={key} gutter={[16,16]} align='bottom'>
                  <Col span={12}>
                    <Form.Item
                      {...restField}
                      name={[name, "technology"]}
                      rules={[{ required: true, message: "Required" }]}
                      label="Technology"
                    >
                      <input type="text" />
                    </Form.Item>
                  </Col>
                  <Col span={11}>
                    <Form.Item
                      {...restField}
                      name={[name, "rating"]}
                      rules={[{ required: true, message: "Required" }]}
                      label="Rating"
                    >
                      <input type="text" />
                    </Form.Item>
                  </Col>

                  <i
                    className="ri-delete-bin-line"
                    onClick={() => remove(name)}
                  ></i>
                </Row>
              ))}
              <Form.Item className="my-3">
                <Button type="dashed" onClick={() => add()} block>
                  Add Skill
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        </div>
         {/* experience */}
         <div style={{marginTop:'50px'}}>
          <h1 className="text-md">Work Experience</h1>
        <Form.List name="experience">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Row key={key} gutter={[16,16]} align='bottom'>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      name={[name, "company"]}
                      rules={[{ required: true, message: "Required" }]}
                      label="Company"
                    >
                      <input type="text" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      {...restField}
                      name={[name, "role"]}
                      rules={[{ required: true, message: "Required" }]}
                      label="Role"
                    >
                      <input type="text" />
                    </Form.Item>
                  </Col>
                  <Col span={7}>
                    <Form.Item
                      {...restField}
                      name={[name, "period"]}
                      rules={[{ required: true, message: "Required" }]}
                      label="Period"
                    >
                      <input type="text" />
                    </Form.Item>
                  </Col>

                  <i
                    className="ri-delete-bin-line"
                    onClick={() => remove(name)}
                  ></i>
                </Row>
              ))}
              <Form.Item className="my-3">
                <Button type="dashed" onClick={() => add()} block>
                  Add Experirnce
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        </div>
    </>
  );
}

export default EmployeeForm;
