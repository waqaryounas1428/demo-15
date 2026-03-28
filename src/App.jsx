import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import CreateTaskUI from './demo05/createtaskui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

  function handleCreateTask(task){
    console.log(task);
  }


  return (
    <>
      <Container fluid className='mt-3'  >
        <Row className='mb-3' >
          <Col className='col-4' >
            <CreateTaskUI onCreateTask={handleCreateTask} />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
