import React from 'react'
import {AiOutlineMobile} from 'react-icons/ai'
import {IoMdCheckmark} from 'react-icons/io'
import {BsTabletLandscape} from 'react-icons/bs'
import {MdComputer} from 'react-icons/md'
import {IoTvOutline} from 'react-icons/io5'
import {useDispatch} from 'react-redux'
import {addCount} from '../store/features/userSlice'
import './Step4.css'

const Step4 = () => {
    const dispatch = useDispatch()
  return (
      <div className="step4">
          <div className="top-left">
          <p>STEP <span className='mk-bld'>1</span> OF 3</p>
          <h2>Choose the plan that's right for you.</h2>
           <ul className='ul-step4'>
              <li><span className="ico-sm"><IoMdCheckmark/></span> <p>Watch all you want. Ad free</p></li>
              <li><span className="ico-sm"><IoMdCheckmark/></span><p>Recommendations just for you</p></li>
              <li><span className="ico-sm"><IoMdCheckmark/></span> <p>Change or cancel your plan anytime</p></li>
              </ul>
          </div>
          <div className="table-sub">
              <table>
                  <tr>
                      <td></td>
                      <td>
                          <div className="sub4">
                        <p>Mobile</p>
                        </div>
                      </td>
                      <td>
                        <div className="sub4">
                  <p>Basic</p>
              </div>
                      </td>
                      <td>
                         <div className="sub4">
                  <p>Standard</p>
              </div>
                      </td>
                      <td>

                          <div className="sub4">
                  <p>Premium</p>
              </div>
                      </td>
                  </tr>
                  <tr>
                      <td>Monthly Price</td>
                      <td>1,200</td>
                      <td>2,900</td>
                      <td>3,600</td>
                      <td>4,400</td>
                  </tr>
                  <tr>
                      <td>Video quality</td>
                      <td>Good</td>
                      <td>Good</td>
                      <td>Better</td>
                      <td>Best</td>
                  </tr>
                  <tr>
                      <td>Resolution</td>
                      <td>480px</td>
                      <td>480px</td>
                      <td>1080px</td>
                      <td>4K + HDR</td>
                  </tr>
                  <tr>
                      <td>Devices you can use to watch</td>
                      <td>
                          <div className='devices'>
                              <div className="phone">
                                   <AiOutlineMobile />
                                    <p>phone</p>
                              </div>
                              <div className="tablet">
                                  <BsTabletLandscape />
                                  <p>tablet</p>
                              </div>
                          </div>
                      </td>
                      <td>
                           <div className='devices'>
                              <div className="phone">
                                   <AiOutlineMobile />
                                    <p>phone</p>
                              </div>
                              <div className="tablet">
                                  <BsTabletLandscape />
                                  <p>tablet</p>
                              </div>
                              <div className="computer">
                                  <MdComputer />
                                  <p>computer</p>
                              </div>
                              <div className="television">
                                  <IoTvOutline />
                                  <p>television</p>
                              </div>
                          </div>
                      </td>
                      <td>
                           <div className='devices'>
                              <div className="phone">
                                   <AiOutlineMobile />
                                    <p>phone</p>
                              </div>
                              <div className="tablet">
                                  <BsTabletLandscape />
                                  <p>tablet</p>
                              </div>
                               <div className="computer">
                                  <MdComputer />
                                  <p>computer</p>
                              </div>
                              <div className="television">
                                  <IoTvOutline />
                                  <p>television</p>
                              </div>
                          </div>
                      </td>
                      <td>
                           <div className='devices'>
                              <div className="phone">
                                   <AiOutlineMobile />
                                    <p>phone</p>
                              </div>
                              <div className="tablet">
                                  <BsTabletLandscape />
                                  <p>tablet</p>
                              </div>
                               <div className="computer">
                                  <MdComputer />
                                  <p>computer</p>
                              </div>
                              <div className="television">
                                  <IoTvOutline />
                                 <p>television</p>
                              </div>
                          </div>
                      </td>
                  </tr>
              </table>

          </div>
          <div className="p1">
              <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities.
              Not all content is available in all resolutions.
              See our Terms of Use for more details.
          </p>
          </div>
          <div className="p1">
              <p>
              Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium,
              2 with Standard, and 1 with Basic and Mobile.
          </p>
          </div>
           <button className='next-btn' onClick={()=> dispatch(addCount())}>Next</button>
    </div>
  )
}

export default Step4