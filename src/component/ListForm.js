import React, {useState} from 'react'
import './ListForm.css'
import nData from '../Data/nData'
import {brooklyn, manhattan, queens, staten, bronx} from '../Data/nData'



function ListForm(props){
    const { listingForm, submitDisabled, listing, price, errorState, changeHandler, submitHandler } = props
    
    return(
         <form onSubmit={submitHandler}>
            <div className="inputs">
            <label htmlFor="Borough">Borough
               
               <select
                    id="Borough"
                    name="Borough"
                    value={listingForm['Borough']}
                    onChange={changeHandler}
                    >
                  <option value="">Select one</option>
                  <option value="Bronx">Bronx</option>
                  <option value="Manhattan">Manhattan</option>
                  <option value="Brooklyn">Brooklyn</option>
                  <option value="Queens">Queens</option>
                  <option value="Staten Island">Staten Island</option>
               </select>
                  {
                    errorState['Borough'].length>0? <p className="error-msg">{errorState['Borough']}</p> : null
                  }
             </label>
             <label htmlFor="Neighbourhood">Neighborhood
               <select
                    id="Neighbourhood"
                    name="Neighbourhood"
                    value={listingForm['Neighbourhood']}
                    onChange={changeHandler}
                    >
                  <option value="">Select one</option>
                   {  
                      listingForm['Borough']==='Manhattan'?(
                          <>
                          {
                              manhattan.map((n)=> {
                                  return <option value={n}>{n}</option>
                              })
                          }
                         </>)
                        :
                        listingForm['Borough']==='Bronx'?(
                            <>
                            {
                                bronx.map((n)=> {
                                    return <option value={n}>{n}</option>
                                })
                            }
                                
                                
                            </>) 
                            :
                        listingForm['Borough']==='Brooklyn'?(
                            <>
                            {
                                brooklyn.map((n)=> {
                                    return <option value={n}>{n}</option>
                                })
                        }
                            </>) 
                        :
                    listingForm['Borough']==='Queens'?(
                        <>
                         {
                            queens.map((n)=> {
                                return <option value={n}>{n}</option>
                            })
                        }
                        </>) 
                        : listingForm['Borough']==='Staten Island'?(
                            <>
                             {
                                staten.map((n)=> {
                                return <option value={n}>{n}</option>
                            })
                            }
                            </>
                        ): null
                    }
                 </select>
                  {
                      errorState['Neighbourhood'].length>0? <p className="error-msg">{errorState['Neighbourhood']}</p> : null
                            
                  }
                        
                           
                            
                                
                                
                                
                            
                                
                            
                        
                               
                        
                        

                  
                        

                        
                       


             </label>
             <label htmlFor="Room_type">Room Type
                 <select
                    id="Room_type"
                    name="Room_type"
                    value={listingForm['Room_type']}
                    onChange={changeHandler}
                    >
                  <option value="">Select One</option>
                  <option value="Entire home/apt">Entire Home/Apt</option>
                  <option value="Private room">Private Room</option>
                  <option value="Shared room">Shared Room</option>
                </select>
                 
                
                    {
                        errorState['Room_type'].length>0? <p className="error-msg">{errorState['Room_type']}</p> : null
                    }
             </label>
             <label htmlFor="Availability_365">Days Available per Year
                 <input 
                    id="Availability_365"
                    name="Availability_365"
                    type="number"
                    
                    min = "1"
                    max="365"
                    value={listingForm['Availability_365']}
                    onChange={changeHandler}
                    />
                    
                {
                    errorState['Availability_365'].length>0? <p className="error-msg">{errorState['Availability_365']}</p> : null
                }
             </label>
             <label htmlFor="Minimum_nights">Minimum Nights Stay 
                 <input 
                    id="Minimum_nights"
                    name="Minimum_nights"
                    type="number"
                    min="1"
                    max="365"
                    value={listingForm['Minimum_nights']}
                    
                    onChange={changeHandler}
                    />
                {
                    errorState['Minimum_nights'].length>0? <p className="error-msg">{errorState['Minimum_nights']}</p> : null
                }
             </label>
             
             <button 
                disabled={submitDisabled} 
                type="submit"
                style= {submitDisabled===false?{color:"white", backgroundColor:"green"}:null}
                >Submit
                </button>
             <pre>{JSON.stringify(listing, null, 2)}</pre>

            </div>
             <div className="outputs">
                 <p>Borough: {listing.Borough} </p>
                 <p>Neighborhood: {listing.Neighbourhood} </p>
                 <p>Room type: {listing['Room_type']} </p>
                 <p>Minimum Nights: {listing['Minimum_nights']} </p>
                 <p>Days Available: {listing['Availability_365']} </p>
                 
            <p>Your optimal price is</p> 
            <p style={{color:"green", fontSize: "40px"}}> {price["predicted_price "]}</p>
             </div>
         </form>
    )
}

export default ListForm
                      
                  
                  
                

