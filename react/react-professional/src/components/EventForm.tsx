import {Form, Input, DatePicker, Row, Button, Select} from 'antd';
import { Moment } from 'moment';
import React, { FC, useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';
import { IUser } from '../models/IUser';
import { formatDate } from '../utils/date';
import { rules } from '../utils/rules';

interface defoltProps {
   guests: IUser[],
   submit: (event: IEvent) => void
}

const EventForm: FC<defoltProps> = (props) => {

   const [event, setEvent] = useState<IEvent>({
      author: '',
      guest: '',
      data: '',
      description: ''
   } as IEvent)
   const {user} = useTypedSelector(state => state.auth)
   const selectDate = (date: Moment | null) => {
      if(date) {
         setEvent({...event, data: formatDate(date.toDate())})
      }
   }
   const submitForm = () => {
      props.submit({...event, author: user.username})
   }
  return (
     <Form onFinish={submitForm}>
        <Form.Item
     label="Add description event"
     name="description"
     rules={[rules.required()]}
   >
     <Input
         onChange={e => setEvent({...event, description: e.target.value})}
         value={event.description}
     />
   </Form.Item>
   <Form.Item
      label="Add data"
      name="data"
      rules={[rules.required('Add data pls'), rules.isDateAfter("You pick event after today!")]}
   >
      <DatePicker
         onChange={(data) => selectDate(data)}
      />
   </Form.Item>
   <Select onChange={(guest: string) => setEvent({...event, guest})}>
      {props.guests.map(prop => 
         <Select.Option value={prop.username} key={prop.username}>{prop.username}</Select.Option>
      )}
    </Select>
   <Row justify='end'>
   <Form.Item>
     <Button type="primary" htmlType="submit">
       Submit
     </Button>
   </Form.Item>
   </Row>
     </Form>
  )
};

export default EventForm;
