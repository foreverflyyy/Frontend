import {Button, Layout, Row, Modal} from 'antd';
import React, {FC, useEffect, useState} from 'react';
import EventCalendar from '../components/EventCalendar';
import EventForm from '../components/EventForm';
import { useAction } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { IEvent } from '../models/IEvent';

const Event:FC = () => {
   const [modaleVisible, setModalVisible] = useState(false)
   const {fetchGuest, createEvent, fetchEvents} = useAction()
   const { guests, events } = useTypedSelector(state => state.event)
   const {user} = useTypedSelector(state => state.auth)
   useEffect(() => {
      fetchGuest()
      fetchEvents(user.username)
   }, [])
   const addNewEvent = (event: IEvent) => {
      setModalVisible(false)
      createEvent(event)
   }
  return (
  <Layout>
      <EventCalendar events={events}/>
      <Row justify='center'>
         <Button onClick={() => setModalVisible(true)}>Add events</Button>
      </Row>
      <Modal
      title='Add events'
      visible={modaleVisible}
      footer={null}
      onCancel={() => setModalVisible(false)}
      >
         <EventForm guests={guests} submit={addNewEvent}/>
      </Modal>
      
  </Layout>
  )
}

export default Event