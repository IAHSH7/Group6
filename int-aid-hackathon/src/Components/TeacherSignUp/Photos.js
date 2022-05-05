import { Link } from "react-router-dom";

import CardWrapper from "../layout/CardWrapper";

const PhotosPage = (props) => {
  return (
      <CardWrapper>
          <div>
            <h1 className="text-2xl font-bold text-left p-5 ml-50">Creating Your Account</h1>
            <ul class="steps">
                <li class="step step-secondary">Step 1 <br/> Educator Information</li>
                <li class="step step-secondary">Step 2 <br/> School Information</li>
                <li class="step step-secondary">Step 3 <br/> Upload Pictures</li>
                <li class="step">Step 4 <br/> Add Your Story</li>
                <li class="step">Step 5 <br/> Create Supply List</li>
                <li class="step">Step 6 <br/> Review and Complete</li>
            </ul>
            <p className="text-2xl text-left p-5">Upload some photos of your classroom and your community. <br/> You can add or change these anytime.</p>
            <div className="flex flex-row">
                <div className="bg-slate-200 m-10">Image</div>
                <div className="bg-slate-200 m-10">Image</div>
                <div className="bg-slate-200 m-10">Image</div>
                <div className="bg-slate-200 m-10">Image</div>
                <div className="bg-slate-200 m-10">Image</div>
            </div>
            <button className="btn  btn-primary">Upload Photos</button>
            {/* TODO: bring form to center */}
            <div className="create-user-buttons flex justify-between mt-48">
                <Link className="link" to="/school">
                    <button className="btn  btn-accent text-white">Back</button>
                </Link>
                <Link className="link" to="/story">
                    <button className="btn btn-primary text-white">Next</button>
                </Link> 
            </div>
          </div>
      </CardWrapper>
  )
}

export default PhotosPage;