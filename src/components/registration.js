import React from "react";
export default function Registration() {
    return (
        <>l
            <h1>REGISTRATION FORM </h1>

            <form className="content" action="connect1.php" method="post">

                <div >
                    <label for="name">Enter your name:</label>
                    <input type="text" id="name" name="name" placeholder="ex:abcd" /><br></br>
                    <label for="mail">E mail:</label>
                    <input type="email" id="mail" name="emailid" placeholder="abcd@gmail.com" /><br></br>
                    <label for="password">Enter your password:</label>
                    <input type="password" id="password" name="password" placeholder="enter a strong password" /><br></br>
                    <label for="confirm password">Confirm Password:</label>
                    <input type="password" id="password" name="confirmpassword" placeholder="confirm password " /><br></br>
                    <label for="telephone">Telephone No:</label>
                    <input type="tel" id="telephone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{3}" name="number" /><br></br>
                    <label for="gender">Gender:</label>
                    <input type="radio" id="Male" name="gender" value="Male" />
                    <label for="Male">Male</label>
                    <input type="radio" id="female" name="gender" value="Female" />
                    <label for="female">Female</label>
                    <input type="radio" id="others" name="gender" value="Others" />
                    <label for="others">Others</label><br></br>
                    <label for="date">Date Of Birth:</label>
                    <input type="date" id="date" name="dateofbirth" placeholder="raman" /><br></br>
                    <label for="language">Language(s) Known:</label><br></br>
                    <input type="checkbox" id="english" name="languages" value="English" />
                    <label for="english">English</label>
                    <input type="checkbox" id="hindi" name="languages" value="Hindi" />
                    <label for="hindi">Hindi</label>
                    <input type="checkbox" id="telugu" name="languages" value="Telugu" />
                    <label for="telugu">Telugu</label>
                    <input type="checkbox" id="tamil" name="languages" value="Tamil" />
                    <label for="tamil">Tamil</label><br></br>
                    <label for="continent">Choose Your Continent:</label>
                    <select name="continent" value="continent">
                        <option value="Asia" name="continent">Asia</option>
                        <option value="Africa" name="continent">Africa</option>
                        <option value="North America" name="continent">North America</option>
                        <option value="South America" name="continent">South America</option>
                        <option value="Europe" name="continent">Europe</option>
                        <option value="Australia" name="continent">Australia</option>
                        <option value="Antarctica" name="continent">Antarctica</option>
                    </select><br></br>

                    <marquee >
                        <a href="login.html" name="already" target="blank" marquee width="60%" height="100px">Already have an account:) LOGIN
                            ?</a><br />
                    </marquee>
                    <input type="SUBMIT" name="save" value="SUBMIT" />
                    <input type="RESET" value="RESET" />


                </div>
            </form>


        </>
    )
}