import React from "react"
import Card from "react-bootstrap/Card"
import huey from './huey.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={MickeyMouse} />
        {/* Source: https://upload.wikimedia.org/wikipedia/commons/9/9e/120131-N-XK513-120_Sailor_directs_a_UH-1N_Huey_helicopter_from_%28VMM%29_261_%28cropped%29.jpg */}
        <Card.Body>
            <Card.Title>UH-1N Huey</Card.Title>
            <Card.Text>
            This is one of the world's most recognizable helicopters.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard