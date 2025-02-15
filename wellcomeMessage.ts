export const getWellcomeMessageEmailTemplate = (data: any) => {
    const { name } = data;
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
                    a{
                        color: #007AFF;
                        font-weight: 700;
                        text-decoration: none;
                    }

                    @media (max-width : 500px){
                        body{
                        padding: 1rem;
                        }
                        h3{
                            font-size: 1.4rem
                        }
                        main{
                            width: auto;
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
                        Welcome to PillQ
                    </h3>

                    <h3>Let’s Simplify Your Medication Routine!</h3>

                    <ul>
                        <li>Hello ${name},</li>
                        <li>Welcome to PillQ! 🎉 </li>
                        <li>We’re excited to help you stay on top of your meds effortlessly.</li>
                    </ul>


                    <ul>
                        <li>Here’s what you can do with PillQ:</li>
                        <li>✅ Set smart pill reminders</li>
                        <li>✅ Track your doses easily</li>
                        <li>✅ Never miss a medication again</li>
                    </ul>

                    <p>Get started now and take control of your health! 💊</p>

                    <div class="line"></div>

                    <p>
                        Happy tracking! <br>
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
            </html>`

}

const emailTemplate = getWellcomeMessageEmailTemplate({ name: "John Doe" });
console.log(emailTemplate);



