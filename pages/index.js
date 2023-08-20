import { Inter } from 'next/font/google'
import Navbar from './Component/navbar'
import { Button, Form, Card, Input, Modal } from 'antd'
import react, { Fragment } from 'react'
import React, { useState } from 'react';
import { bahttext } from "bahttext"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [mesprefix1, setPrefix1] = useState('');
  const prefix1 = (event) => {
    setPrefix1(event.target.value);
  };
  const [mesname1, setName1] = useState('');
  const name1 = (event) => {
    setName1(event.target.value);
  };
  const [meslname1, setLname1] = useState('');
  const lname1 = (event) => {
    setLname1(event.target.value);
  };
  const [mesmail, setMail] = useState('');
  const mail = (event) => {
    setMail(event.target.value);
  };
  const [mesdetail, setDetail] = useState('');
  const detail = (event) => {
    setDetail(event.target.value);
  };
  const [mesquantity, setQuantity] = useState('');
  const quantity = (event) => {
    setQuantity(event.target.value);
  };
  const [mesunit, setUnit] = useState('');
  const unit = (event) => {
    setUnit(event.target.value);
  };

  const [mesorganizer, setOrganizer] = useState('');
  const organizer = (event) => {
    setOrganizer(event.target.value);
  };
  const [mesbidder, setBidder] = useState('');
  const bidder = (event) => {
    setBidder(event.target.value);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <main className='bg-white pb-20'>
        <Navbar />
        <div className=' max-w-7xl mx-auto'>
          <p className='my-5 text-3xl'>ใบเสนอราคา</p>
          <div className='grid grid-cols-5 gap-3'>
            <div className='col-span-3 bg-white border shadow-md py-2 rounded-2xl px-10'>
              <p className='text-end text-sm'>ใบเลขที่</p>
              <div className='grid grid-cols-12 gap-x-5 gap-y-1'>
                <p className=' text-lg col-span-12'>เรียน</p>

                <div className='col-span-2'>
                  <label className=' text-gray-600'>คำนำหน้าชื่อ</label>
                  <Form.Item
                    name="preName"
                    rules={[{ required: true, message: 'กรุณาเลือกคำนำหน้าชื่อ' }]}
                  >
                    <select onChange={prefix1} id="preName" className="px-2 bg-gray-50 border text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected disabled>เลือก</option>
                      <option value="นาย">นาย</option>
                      <option value="นาง">นาง</option>
                      <option value="นางสาว">นางสาว</option>
                    </select>
                  </Form.Item>
                </div>

                <div className='col-span-5'>
                  <label for="name" className=' text-gray-600'>ชื่อ</label>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: 'กรุณาใส่ชื่อ'
                      },
                    ]}
                  >
                    <Input onChange={name1} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </Form.Item>
                </div>

                <div className='col-span-5'>
                  <label for="lastName" className=' text-gray-600'>สกุล</label>
                  <Form.Item
                    name="lastName"
                    rules={[
                      {
                        required: true,
                        message: 'กรุณาใส่สกุล'
                      },
                    ]}
                  >
                    <Input onChange={lname1} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </Form.Item>
                </div>

                <div className='col-span-4'>
                  <label for="rank" className=' text-gray-600'>ตำแหน่ง</label>
                  <Form.Item
                    name="rank"
                    rules={[
                      {
                        required: true,
                        message: 'กรุณาใส่ตำแหน่ง'
                      },
                    ]}
                  >
                    <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </Form.Item>
                </div>

                <div className='col-span-4'>
                  <label for="phoneNum" className=' text-gray-600'>เบอร์โทร</label>
                  <Form.Item
                    name="phoneNum"
                    rules={[
                      {
                        required: true,
                        message: 'กรุณาใส่เบอรืโทร'
                      },
                    ]}
                  >
                    <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </Form.Item>
                </div>

                <div className='col-span-4'>
                  <label for="eMail" className=' text-gray-600'>E-mail</label>
                  <Form.Item
                    name="eMail"
                    rules={[
                      {
                        required: true,
                        message: 'กรุณาใส่ E-mail'
                      },
                    ]}
                  >
                    <Input onChange={mail} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </Form.Item>
                </div>

                <hr className="col-span-12 border-1 border-gray-300 shadow-lg"></hr>
                <p className=' text-lg col-span-12 mt-2'>ผู้จัดทำ</p>

                <div className='col-span-9'>
                  <label className=' text-gray-600'>ชื่อ-สกุล</label>
                  <Form.Item
                    name="maniName"
                    rules={[{ required: true, message: 'กรุณาเลือกผู้จัดทำ' }]}
                  >
                    <select onChange={organizer} id="maniName" className="px-2 bg-gray-50 border text-gray-500 text-sm rounded-lg  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected disabled>เลือกชื่อผู้จัดทำ</option>
                      <option>นายเพชร นสก</option>
                      <option>นายคมกริด นสก</option>
                      <option>นายบันลัง นสก</option>
                    </select>
                  </Form.Item>
                </div>

                <div className='col-span-3'>
                  <button
                    onClick={showModal}
                    type="submit"
                    className="mt-6 group relative flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    </span>
                    เพิ่มชื่อ
                  </button>
                  <Modal title="เพิ่มชื่อ" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <label className=' text-gray-600'>คำนำหน้าชื่อ</label>
                    <Form.Item
                      name="preName"
                      rules={[{ required: true, message: 'กรุณาเลือกคำนำหน้าชื่อ' }]}
                    >
                      <select id="preNameMo" className="px-2 bg-gray-50 border text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected disabled>เลือก</option>
                        <option value="facultyM">นาย</option>
                        <option value="branchM">นาง</option>
                        <option value="branchS">นางสาว</option>
                      </select>
                    </Form.Item>
                    <label className=' text-gray-600'>ชื่อ</label>
                    <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <label className=' text-gray-600'>สกุล</label>
                    <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </Modal>
                </div>

                <hr className="col-span-12 border-1 border-gray-300 shadow-lg"></hr>
                <p className=' text-lg col-span-12 mt-2'>ผู้เสนอราคา</p>

                <div className='col-span-9'>
                  <label className=' text-gray-600'>ชื่อ-สกุล</label>
                  <Form.Item
                    name="bidName"
                    rules={[{ required: true, message: 'กรุณาเลือกผู้เสนอราคา' }]}
                  >
                    <select onChange={bidder} id="bidName" className="px-2 bg-gray-50 border text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                      <option selected disabled>เลือกชื่อผู้จัดทำ</option>
                      <option>นายเพชร นสก</option>
                      <option>นายคมกริด นสก</option>
                      <option>นายบันลัง นสก</option>
                    </select>
                  </Form.Item>
                </div>

                <div className='col-span-3'>
                  <button
                    onClick={showModal}
                    type="submit"
                    className="mt-6 group relative flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    </span>
                    เพิ่มชื่อ
                  </button>
                  <Modal title="เพิ่มชื่อ" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <label className=' text-gray-600'>คำนำหน้าชื่อ</label>
                    <Form.Item
                      name="preNameMod"
                      rules={[{ required: true, message: 'กรุณาเลือกคำนำหน้าชื่อ' }]}
                    >
                      <select id="preNameMo" className="px-2 bg-gray-50 border text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected disabled>เลือก</option>
                        <option value="facultyM">นาย</option>
                        <option value="branchM">นาง</option>
                        <option value="branchS">นางสาว</option>
                      </select>
                    </Form.Item>
                    <label className=' text-gray-600'>ชื่อ</label>
                    <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    <label className=' text-gray-600'>สกุล</label>
                    <Input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </Modal>
                </div>

                <hr className="col-span-12 border-1 border-gray-300 shadow-lg"></hr>
                <p className=' text-lg col-span-12 mt-2'>ลำดับ</p>
                <p className='ml-3 mt-7'>1</p>
                <div className='col-span-10'>
                  <label for="phoneNum" className=' text-gray-600'>รายละเอียด</label>
                  <Form.Item
                    name="phoneNum"
                    rules={[
                      {
                        required: true,
                        message: 'กรุณาใส่เบอรืโทร'
                      },
                    ]}
                  >
                    <Input onChange={detail} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </Form.Item>
                </div>

                <div className='col-span-6 ml-14'>
                  <label for="phoneNum" className=' text-gray-600'>จำนวน</label>
                  <Form.Item
                    name="phoneNum"
                    rules={[
                      {
                        required: true,
                        message: 'กรุณาใส่เบอรืโทร'
                      },
                    ]}
                  >
                    <Input onChange={quantity} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </Form.Item>
                </div>

                <div className='col-span-5'>
                  <label for="phoneNum" className=' text-gray-600'>หน่วยละ</label>
                  <Form.Item
                    name="phoneNum"
                    rules={[
                      {
                        required: true,
                        message: 'กรุณาใส่เบอรืโทร'
                      },
                    ]}
                  >
                    <Input onChange={unit} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  </Form.Item>
                </div>

                <div className='col-span-10 pb-5'>
                  <button
                    type="submit"
                    className="ml-14 group relative flex w-full justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    </span>
                    เพิ่มโครงงาน +
                  </button>
                </div>

              </div>
            </div>

            <div className='col-span-2 bg-white border shadow-lg px-8 py-5 rounded-2xl'>
              <div className='grid grid-cols-12'>
                <b className=' text-xl col-span-full p-3 mb-2 text-center'>ใบเสนอราคา</b>
                <b className='col-span-1 text-sm mt-2'>เรียน</b>
                <p className='col-span-7 text-sm mt-2'> {mesprefix1} &nbsp; {mesname1} &nbsp; {meslname1}</p>
                <b className=' col-span-4 text-sm text-end mt-2'>เลขที่</b>
                <p className='col-span-6 text-xs mt-1'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {mesmail}</p>
                <b className='col-span-6 text-sm text-end mt-2'>วันที่</b>
                <p className='col-span-12 text-sm mt-16 mb-1'>บริษัทฯ มีความยินดีขอเสนอราคาดังรายละเอียดต่อไปนี้</p>
              </div>
              <table className=' w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-lg'>
                <thead className='text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th scope="col" className="px-3 py-1 scale-75">
                      ลำดับ
                    </th>
                    <th scope='col' className="px-6 py-1 w-full scale-75">
                      รายละเอียด
                    </th>
                    <th scope='col' className='px-6 py-1 scale-75'>
                      จำนวน
                    </th>
                    <th scope='col' className='px-3 py-1 w-full scale-75'>
                      หน่วยละ
                    </th>
                    <th scope='col' className='px-6 py-1 w-full scale-75'>
                      จำนวนเงิน
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white scale-75">
                      1
                    </th>
                    <td class="px-6 py-4 scale-75">
                      <p> {mesdetail}</p>
                    </td>
                    <td className="px-6 py-4 text-center scale-75">
                      <p> {mesquantity}</p>
                    </td>
                    <td className="px-6 py-4 text-left scale-75">
                      <p>{mesunit}</p>
                    </td>
                    <td class="px-6 py-4 text-right scale-75">
                      <p > {mesunit*mesquantity}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='grid grid-cols-12 text-sm w-full py-2 bg-gray-50'>
                    <p className='col-span-5 scale-75'>
                      {bahttext(mesunit*mesquantity)}
                    </p>
                    <p className='col-span-3 scale-75'>
                      รวมทั้งสิ้น
                    </p>
                    <p className='col-span-4 scale-75 text-end'>
                      00
                    </p>
              </div>
              <div className='grid grid-cols-12 text-sm w-full py-2 mt-10'>
                <p className='col-span-6 text-start'>
                  ลงชื่อ...................................
                </p>
                <p className='col-span-6'>
                  ลงชื่อ....................................
                </p>
                <p className='col-span-6 text-start mt-3'>
                  ผู้จัดทำ {mesorganizer}
                </p>
                <p className='col-span-6 mt-3'>
                  ผู้นำเสนอราคา {mesbidder}
                </p>
                <p className='col-span-6 text-start mt-3'>
                  วันที่
                </p>
                <p className='col-span-6 mt-3'>
                  วันที่
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
