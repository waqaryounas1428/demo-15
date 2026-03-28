import { Col, Container, Row } from 'react-bootstrap'
import './App.css'
import ProfilePictureUI from './demo01/profilepictureui'
import { BSDemo01 } from './demo02/bsdemo01'
import { BSDemo02 } from './demo02/bsdemo02'
import { ListDemo01 } from './demo02/listdemo01'
import TaskDetailsUI from './demo03/taskdetailsui'
import TasksListUI from './demo03/taskslistui'

function App() {

  const tasks= [ 
    { _id : 1, Title : "assignmnet#4 of react course", Description: "Description of assignment#4. Description of assignment#4 Description of assignment#4", DueDate : new Date("2026-3-5"), Progress : 15 },
    { _id : 2, Title : "assignmnet#4 of react course", Description: "Description of assignment#4. Description of assignment#4 Description of assignment#4", DueDate : new Date("2026-3-5"), Progress : 15 },
    { _id : 3, Title : "assignmnet#4 of react course", Description: "Description of assignment#4. Description of assignment#4 Description of assignment#4", DueDate : new Date("2026-3-5"), Progress : 15 },
    { _id : 4, Title : "assignmnet#4 of react course", Description: "Description of assignment#4. Description of assignment#4 Description of assignment#4", DueDate : new Date("2026-3-5"), Progress : 15 },
  ]

  return (
    <>
      
    <Container fluid  >
      <Row className='mt-3' >
        <Col className='col'>
            <TasksListUI tasks={tasks} />
        </Col>
      </Row>
      {/* <Row>
        <Col className ="col-xl-3 d-xl-block d-none" >
            <div className="bg-dark text-white p-3" style={{ height: "100vH" }}  >
                Left navigation bar here
            </div>
            <div className="col-3">
              
            </div>
        </Col>
      </Row> */}
    </Container>

      {/* <BSDemo02 heading="Panel-1" >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, sapiente, laboriosam unde inventore aut dolores officia natus ullam consequatur eligendi dolorum atque omnis eveniet placeat perspiciatis repudiandae aliquam officiis vitae.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos reiciendis incidunt aperiam quo. Accusantium ratione est possimus ab quod enim! Officiis aliquam culpa voluptas quo incidunt delectus, nisi numquam quae.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam eligendi adipisci nulla ipsa, nihil quibusdam iusto quasi! Dolor earum reiciendis ea distinctio aperiam perferendis? Nisi corrupti tempore ex deleniti distinctio!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero enim sit quibusdam labore omnis, a dolorem rem culpa sed. Numquam iure unde magnam voluptate vel nulla sapiente quaerat in quae!          
        </p>
      </BSDemo02> */}
    </>
  )
}

export default App
