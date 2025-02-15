export const getVerifyAccountEmailTemplate = (data: any) => {
    const { name, emailOTP } = data;
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>

            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">

            <style>
                *{
                    margin: 0;
                    padding: 0;
                }
                header{
                    display: flex;
                    justify-content: center;
                }
                header img{
                    margin-top: 1.5rem;
                }

                main , footer{
                    width: 80vw;
                    padding: 2rem;
                    max-width: 540px;
                    border: 1px solid #00A8A8 ;
                    border-radius: 20px;
                    margin: 2rem auto 1rem auto;
                    font-family: "Nunito", serif;
                    font-size: 1rem;
                }
                h3{
                    text-align: center;
                    font-weight: 700;
                    font-size: 2rem;
                    margin: 0;
                }
                li{
                    list-style-type: none;
                }
                ul{
                    margin: 2rem 0;
                }
                .line{
                    border: 1px solid #00A8A8;
                    width: 5rem;
                    margin: 1.5rem 0;
                }
                footer{
                    border: none;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    font-weight: 600;
                    padding: 0;  
                    gap: 0.5rem;  
                    line-height: 1.5rem;        
                }
                footer img{
                    width: fit-content;
                    margin: 0;
                }
                footer a{
                    color: #007AFF;
                    font-weight: 700;
                    text-decoration: none;
                }

                #otp{
                    font-size: 2.5rem;
                    font-weight: 700;
                    text-align: center;
                    line-height: 2.8rem;
                    color: #00A8A8;
                    letter-spacing: 1.5rem;
                }
                main a{
                    text-decoration: none;
                    color: #00A8A8;
                }

                @media (max-width : 500px){
                    body{
                    padding: 1rem;
                    }
                    h3 {
                        font-size: 1.4rem
                    }
                    main{
                        width: auto;
                    }
                    #otp{
                        font-size: 2rem;
                    }
                }
                @media (max-width : 350px){
                
                    #otp{
                        font-size: 1.5rem;
                        letter-spacing: 1rem;
                    }
                }
            
            </style>
            
        </head>
        <body>
            <header>
                <img src="./images/PillQ Logo.png" alt="Pill logo" height="43px" width="fit-content">
            </header>
            <main>
                <h3>
                    Verify Your PillQ Account
                </h3>

                <h3>Here’s Your OTP!</h3>

                <ul>
                    <li>Hello ${name},</li>
                    <li>You're one step away from activating your PillQ account. Use this OTP to verify your email: </li>
                </ul>

                <div id="otp">
                    ${emailOTP}
                </div>

                <ul>
                    <li>This code is valid for the next 10 minutes. If you didn’t request this, ignore this email.</li>
                    <li>Stay on track with your meds! 💊</li>
                </ul>

                <div class="line"></div>

                <ul>
                    <li>For further assistance, contact our support team at  <a href="">support@pillq.com</a> </li>
                </ul>
                
                <p>
                    Stay Healthy, <br>
                    <b> PillQ Team </b>
                </p>
            </main>
            <footer>
                <img src="./images/PillQ Logo.png" alt="Pill logo" height="22px">
                <div>
                    Need help?
                    <a href="">Sign in</a> |
                    <a href="">Help Center</a>
                </div>
            </footer>
        </body>
        </html>  `

}

const emailTemplate = getVerifyAccountEmailTemplate({ name: "John Doe", emailOTP: "239599" });
console.log(emailTemplate);