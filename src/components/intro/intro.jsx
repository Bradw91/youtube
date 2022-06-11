import React from "react";
import "./intro.css";
import profile_pic from "../../img/profile_pic.png"

function Intro() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 className="i-name">Brad Willard</h1>
					<div className="i-title">
						<div className="i-title-wrapper">
							<div className="i-title-item">
								Expat Software Developer
							</div>
							<div className="i-title-item">
								Expat and Immigration  Consultant
							</div>
							<div className="i-title-item">
								Foreign Language Enthusiast
							</div>
						</div>
					</div>
					<p className="i-desc">
						I am a management consultant learning Software Development. Currently living in the Netherlands, and have lived in various countries. I love developing technical capabilities, helping the expat community abroad, and learning languages. I am fluent in English and Korean, and speak a bit of Dutch
					</p>
        </div>
				
      </div>

      <div className="i-right">
				<div className="i-bg"></div>
				<img src={profile_pic} alt="" className="i-img" />
			</div>
    </div>
  );
}

export default Intro;
