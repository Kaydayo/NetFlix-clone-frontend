import React from 'react'
import {AiOutlineMobile} from 'react-icons/ai'
import {IoMdCheckmark} from 'react-icons/io'
import {BsTabletLandscape} from 'react-icons/bs'
import {MdComputer} from 'react-icons/md'
import {IoTvOutline} from 'react-icons/io5'
import {useDispatch, useSelector} from 'react-redux'
import {addCount, addSubscription, getSubPrice} from '../store/features/userSlice'
import './Step4.css'



const Step4 = () => {
    const dispatch = useDispatch()
    
    const subs = useSelector((state: any) => state.user.subscription)
    
    const checkMovies = () => {
        const isEmpty = Object.values(subs).every(x => x === false);
        
        if (!isEmpty) {
            dispatch(addCount())
        }
    }   
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
                  <thead>
                  <tr className="makeTran">
                      <th></th>
                      <th>
                              <div className={`sub4 ${subs.mobile && 'actSub'}`} onClick={() =>
                              {
                                  dispatch(addSubscription('mobile'))
                                  dispatch(getSubPrice())
                              }}>
                        <p>Mobile</p>
                        </div>
                      </th>
                      <th>
                              <div className={`sub4 ${subs.basic && 'actSub'}`} onClick={() => {
                                  dispatch(addSubscription('basic'))
                                  dispatch(getSubPrice())
                              }
                              }>
                  <p>Basic</p>
              </div>
                      </th>
                      <th>
                              <div className={`sub4 ${subs.standard && 'actSub'}`} onClick={() => {
                                  dispatch(addSubscription('standard'))
                                  dispatch(getSubPrice())
                              }
                              }>
                  <p>Standard</p>
              </div>
                      </th>
                      <th>

                              <div className={`sub4 ${subs.premium && 'actSub'}`} onClick={() => {
                                  dispatch(addSubscription('premium'))
                                  dispatch(getSubPrice())
                              }
                              }>
                  <p>Premium</p>
              </div>
                      </th>
                  </tr>
                  </thead>
                  <tbody>
                      <tr>
                      <td>Monthly Price</td>
                      <td className={subs.mobile && 'actSubtxt'}>$1,200</td>
                      <td className={subs.basic && 'actSubtxt'}>$2,900</td>
                      <td className={subs.standard && 'actSubtxt'}>$3,600</td>
                      <td className={subs.premium && 'actSubtxt'}>$4,400</td>
                  </tr>
                  <tr>
                      <td>Video quality</td>
                      <td className={subs.mobile && 'actSubtxt'}>Good</td>
                      <td className={subs.basic && 'actSubtxt'}>Good</td>
                      <td className={subs.standard && 'actSubtxt'}>Better</td>
                      <td className={subs.premium && 'actSubtxt'}>Best</td>
                  </tr>
                  <tr>
                      <td>Resolution</td>
                      <td className={subs.mobile && 'actSubtxt'}>480px</td>
                      <td className={subs.basic && 'actSubtxt'}>480px</td>
                      <td className={subs.standard && 'actSubtxt'}>1080px</td>
                      <td className={subs.premium && 'actSubtxt'}>4K + HDR</td>
                  </tr>
                  <tr>
                      <td>Devices you can use to watch</td>
                      <td>
                          <div className={`devices ${subs.mobile && 'actSubtxt'}`}>
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
                           <div className={`devices ${subs.basic && 'actSubtxt'}`}>
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
                              <div className="TV">
                                  <IoTvOutline />
                                  <p>TV</p>
                              </div>
                          </div>
                      </td>
                      <td>
                           <div className={`devices ${subs.standard && 'actSubtxt'}`}>
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
                              <div className="TV">
                                  <IoTvOutline />
                                  <p>TV</p>
                              </div>
                          </div>
                      </td>
                      <td>
                           <div className={`devices ${subs.premium && 'actSubtxt'}`}>
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
                              <div className="TV">
                                  <IoTvOutline />
                                 <p>TV</p>
                              </div>
                          </div>
                      </td>
                  </tr>
                  </tbody>

              </table>

          </div>
          <div className="p1">
              <p>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities.
              Not all content is available in all resolutions.
              See our <span style={{color:'blue'}}>Terms of Use</span> for more details.
          </p>
          </div>
          <div className="p1">
              <p>
              Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium,
              2 with Standard, and 1 with Basic and Mobile.
          </p>
          </div>
           <button className='next-btn' onClick={checkMovies}>Next</button>
    </div>
  )
}

export default Step4