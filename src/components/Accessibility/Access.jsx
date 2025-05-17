import './Access.css';
import Frame from '../../assets/phone.svg';
import Screen from '../../assets/screen.svg';
import Button from '../Button/Button';
import Google from '../../assets/google_play.svg';
import Apple from '../../assets/apple_store.svg';


function Access() {
    return (
        <div className='access'>
            <div className='accessLeft'>
                <div className='phone1'>
                    <img src={Frame} alt="phone" className='frame1' />
                    {/* <img src={Screen} alt="screen" className='screen1'/> */}
                </div>
                <div className='phone2'>
                    <img src={Frame} alt="phone" className='frame2' />
                    {/* <img src={Screen} alt="screen" className='screen2'/> */}
                </div>

            </div>
            <div className='accessRight'>
                
                    <p className='header'>Download the <span>Medify</span> App</p>
                    <p className='subHeader'>Get the link to download the app</p>
                    <div>
                        <div className='countryCode'>
                            <div><p>+91</p></div>
                            <input type="text" placeholder='Enter your phone number' className='input' />
                        </div>
                        
                        <Button>Send SMS</Button>
                    </div>
                    <div className='download'>
                        <img src={Google} alt="google" className='google' />
                        <img src={Apple} alt="apple" className='apple' />
                    </div>
                
            </div>
        </div>
    )
}

export default Access;