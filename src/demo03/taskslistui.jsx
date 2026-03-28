import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Row, Col } from "react-bootstrap";
import TaskDetailsUI from "./taskdetailsui";



export default function TasksListUI({ tasks }) {

    return (
        <>
            <Row>
                {
                    tasks.map(t =>
                        <Col className="col-4 mb-3" key={t._id} >
                            <TaskDetailsUI task={t} />
                        </Col>
                    )
                }
            </Row>
        </>
    )
}