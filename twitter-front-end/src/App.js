import React from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import {AiOutlineTwitter} from 'react-icons/ai';
import {BiHomeCircle} from 'react-icons/bi';
import {AiTwotoneStar} from 'react-icons/ai';
import {AiOutlinePicture} from 'react-icons/ai';
import {AiOutlineFileGif} from 'react-icons/ai';
import {AiOutlineAlignLeft} from 'react-icons/ai';
import {AiOutlineSmile} from 'react-icons/ai';
import {AiOutlineDown} from 'react-icons/ai';
import {FaRegComment} from 'react-icons/fa';
import {FaRetweet} from 'react-icons/fa';
import {FaRegHeart} from 'react-icons/fa';
import {BsUpload} from 'react-icons/bs';



function App() {
  return (
    <div className="App">
      <div className="Main">

        {/*<Navbar/>*/}
        {/*<Mainarea/>*/}

        <div className="Sidebar_Area">
          <div className="Twitter">
          <AiOutlineTwitter color='#1DA1F2' fontSize="2.3rem" />
          </div>
          <div className="Icons">
            <BiHomeCircle color="#1DA1F2" fontSize="2.3rem" />
          </div>
        </div>
  

{/* MAIN AREA PART */}

        <div className="Main_Area">
          <div className="Home">
            <div className="home">
              Home
            </div>

            <div className="Star_icon">
              <AiTwotoneStar color='#1DA1F2' fontSize="2.3rem" />
            </div>
            </div>
            <br></br>

            <div className="Create_post">
              <div className="Add_text">
                <div className="Proffile">
                  <img src="/images/profilepic.jpg" alt="dp" style={{height: "35px", width: "35px", borderRadius: "50%"}} />
                </div>
                  <input type="Post" placeholder="What are you up to?" />
                </div>

                <div className="Btns">
              <div className="Icon">
                <div className="Btns_icon">
                  <AiOutlinePicture color="#1DA1F2" fontSize="2rem" />
                </div>
                <div className="Btns_icon">
                  <AiOutlineFileGif color="#1DA1F2" fontSize="2rem" />
                </div>
                <div className="Btns_icon">
                  <AiOutlineAlignLeft color="#1DA1F2" fontSize="2rem" />
                </div>
                <div className="Btns_icon">
                  <AiOutlineSmile color="#1DA1F2" fontSize="2rem" />
                </div>
              </div>
            <div className="Tweets">
              <button className="btns-tweet">
                Tweet
              </button>
              </div>
            </div>
            </div>

            <div className="posted_Area">
              <div className="Profile">
                <div className="User_Detail">
                  <img src="/images/profilepic.jpg" alt="dp" style={{height: "35px", width: "35px", borderRadius: "50%"}} />
                <div className="User_Name">Yann</div>
                <div className="User_id">@Yann_Luc</div>
                </div>
                <div className="Drop_down">
                  <AiOutlineDown fontSize="1rem" />
                </div>
              </div>
              <div className="Quotes">
                Building a Tweeter App is a pain in the ... God bless the tutos on YouTube.
              </div>
              <br></br>
              <div className="Profile-images">
              <img src="/images/IMG_5340.jpg" alt="profile" style={{height: "50rem", width: "100%", objectFit:"fill"}} />
              </div>
              <div className="Comment_Section">
                <div className="Comment">
                  <FaRegComment fontSize="1.4rem" />
                </div>
                <div className="Comment">
                  <FaRetweet fontSize="1.4rem" />
                </div>
                <div className="Comment">
                  <FaRegHeart fontSize="1.4rem" />
                </div>
                <div className="Comment">
                  <BsUpload fontSize="1.4rem" />
                </div>
              </div>
            </div>

            <br></br>

            <div className="posted_Area">
              <div className="Profile">
                <div className="User_Detail">
                  <img src="/images/profilepic.jpg" alt="dp" style={{height: "35px", width: "35px", borderRadius: "50%"}} />
                <div className="User_Name">Yann</div>
                <div className="User_id">@Yann_Luc</div>
                </div>
                <div className="Drop_down">
                  <AiOutlineDown fontSize="1rem" />
                </div>
              </div>
              <div className="Quotes">
                R.I.P Lemmy & Hail Motörhead
              </div>
              <br></br>
              <div className="Profile-images">
              <img src="/images/IMG_5371.jpg" alt="profile" style={{height: "50rem", width: "100%", objectFit:"fill"}} />
              </div>
              <div className="Comment_Section">
                <div className="Comment">
                  <FaRegComment fontSize="1.4rem" />
                </div>
                <div className="Comment">
                  <FaRetweet fontSize="1.4rem" />
                </div>
                <div className="Comment">
                  <FaRegHeart fontSize="1.4rem" />
                </div>
                <div className="Comment">
                  <BsUpload fontSize="1.4rem" />
                </div>
              </div>
            </div>

            <br></br>

            <div className="posted_Area">
              <div className="Profile">
                <div className="User_Detail">
                  <img src="/images/profilepic.jpg" alt="dp" style={{height: "35px", width: "35px", borderRadius: "50%"}} />
                <div className="User_Name">Yann</div>
                <div className="User_id">@Yann_Luc</div>
                </div>
                <div className="Drop_down">
                  <AiOutlineDown fontSize="1rem" />
                </div>
              </div>
              <div className="Quotes">
                What a breathtaking view, jeeees
              </div>
              <br></br>
              <div className="Profile-images">
              <img src="/images/IMG_5365.jpg" alt="profile" style={{height: "35rem", width: "100%", objectFit:"fill"}} />
              </div>
              <div className="Comment_Section">
                <div className="Comment">
                  <FaRegComment fontSize="1.4rem" />
                </div>
                <div className="Comment">
                  <FaRetweet fontSize="1.4rem" />
                </div>
                <div className="Comment">
                  <FaRegHeart fontSize="1.4rem" />
                </div>
                <div className="Comment">
                  <BsUpload fontSize="1.4rem" />
                </div>
              </div>
            </div>

          </div>


        {/* MAIN AREA END */}
    

        <div className="Left_Sidebar_Area">
        Left_Sidebar_Area
        </div>

    </div>
    </div>
  );
}

export default App;
