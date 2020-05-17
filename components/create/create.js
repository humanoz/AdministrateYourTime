import { Modal, Button, Input, DatePicker, Form } from 'antd'; 

import { useState } from 'react';

import './create.css';

const CreateTask = () => {

    const [ visible, setVisible ] = useState(false);
    const [ title, setTitle ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ date, setDate ] = useState("");

    const handleChange = (e, str) => {  
        
        if(!e._isAMomentObject){
          let value = '';
          if(e.target.value){
            value = e.target.value;
          }
          switch(e.target.name){
            case 'title':
              setTitle(value);
              break;
            case 'description':
              setDescription(value);
              break;
           }
        }
    
        if(str){
            setDate(str);
        }

    }

    const handleClick = (e) => {
        e.preventDefault();
        setVisible(true);
    }

    const handleCancel = () => {
        setVisible(false);
    }

    const handleOk = () => {
      const taskInfo = {
        nombre: title, 
        fecha_entrega: date, 
        descripcion: description
      };

      const URL = 'http://localhost:1337/tareas';
      fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(taskInfo)
      })

      setVisible(false);

    }

    return(
        <div>
            <Button onClick={handleClick} type='primary' size='large' style={{width: '120px', margin: '15px 0'}}>Add</Button>

            <Modal onCancel={handleCancel} title='Add new task' visible={visible} width='320px' footer={null}>
                <Form onFinish={handleOk}>
                    <Form.Item label='Title'>
                        <Input id='title' name='title' allowClear onChange={handleChange}/>
                    </Form.Item>
                    <Form.Item label='Description'>
                        <TextArea id='description' name='description' autoSize onChange={handleChange}/>
                    </Form.Item>
                    <Form.Item label='Due Date'>
                        <DatePicker style={{width: '100%'}} onChange={handleChange}/>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType='submit' type='primary' block size='large'>
                            Create
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default CreateTask;


const { TextArea } = Input;
