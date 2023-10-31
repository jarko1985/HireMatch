"use client";
import React from 'react'
import axios from "axios";
import { Button, Form, message } from "antd";
import { useSelector,useDispatch } from "react-redux";
import EmployerForm from '@/components/EmployerForm';
import EmployeeForm from '@/components/EmployeeForm';
import PageTitle from '@/components/PageTitle';
import { setCurrentUser } from "@/redux/usersSlice";
import { setLoading } from "@/redux/loadersSlice";

function Profile() {
    const { currentUser } = useSelector((state: any) => state.users);
    const dispatch = useDispatch();

    const onFinish = async(values:any)=>{
      try {
        values._id = currentUser._id;
        values.userType = currentUser.userType;
        dispatch(setLoading(true));
        const response = await axios.put("/api/users", values);
        message.success("Profile updated successfully");
        dispatch(setCurrentUser(response.data.data));
      } catch (error: any) {
        message.error(error.response.data.message || "Something went wrong");
      } finally {
        dispatch(setLoading(false));
      }
    }
  return (
    <div> 
        <PageTitle title='Profile'/>      
        <Form layout='vertical'
        initialValues={currentUser}
        onFinish={onFinish}
        >
        {currentUser?.userType === "employer" ? (
          <EmployerForm />
        ) : (
          <EmployeeForm />
        )}
        <div className='flex justify-end my-3'>
          <Button type='primary' htmlType='submit'>
            Save
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Profile