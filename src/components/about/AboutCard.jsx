import React from "react"
import "./about.css"

const AboutCard = () => {
  return (
    <>
    
      <div className="aboutCard-h1">
        <h1>Why choose MindSpark</h1>
      </div>
      <div className="aboutCard-section">
      <div className="aboutCard-container1">
        <img className="aboutCard-image" src="https://cdn.kastatic.org/images/lohp/personalized_learning_icon.png" alt=""></img>
        <div className="aboutCard-content-container">
          <h3 className="aboutCard-h3">Personalized learning</h3>
          <span className="aboutCard-p">Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</span>
        </div>    
      </div>

      <div className="aboutCard-container2">
      <img className="aboutCard-image" src="https://cdn.kastatic.org/images/lohp/trusted_content_icon.png" alt=""></img>
      <div className="aboutCard-content-container">
        <h3 className="aboutCard-h3">Trusted content</h3>
        <span className="aboutCard-p">Created by experts, MindSpark's library of trusted, standards-aligned practice and lessons covers math through early college, grammar, science, history, and more. It's all free for learners and teachers.</span>
        </div>
      </div>

      <div className="aboutCard-container3">
        <img className="aboutCard-image" src="https://cdn.kastatic.org/images/lohp/empower_teachers_icon.png" alt=""></img>
        <div className="aboutCard-content-container">
          <h3 className="aboutCard-h3">Tools to empower teachers</h3>
          <span className="aboutCard-p">With MindSpark , teachers can identify gaps in their students' understanding, tailor instruction, and meet the needs of every student.</span>
        </div>
      </div>

    </div>
    </>
  )
}

export default AboutCard
