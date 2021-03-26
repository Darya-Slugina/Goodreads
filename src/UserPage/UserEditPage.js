import React from "react";
import styles from './UserEditPage.module.scss';
import { Link } from "react-router-dom";



export default function UserEditPage({ isLoggedIn, userName }) {

    return (
        <div className={styles.mainContent}>
            <h1 className={styles.h1Title}>
                <div className={styles.mediumText}>
                    <Link to={"/user/userName"} className={styles.mediumTextLink}>View My Profile</Link>
                </div>
                 Account Settings
            </h1>
            <div className={styles.userInfoBox}>
                <form className={styles.userData}>
                    <div className={styles.leftBox}>
                        <p className={styles.formInput}>
                            <label className={styles.formLabel} for="user_first_name">First Name <span className={styles.required}>*</span>
                            </label>
                            <br />
                            <input size="30" maxLength="50" className={styles.firstNameInput} type="text" value="userName" id="user_first_name" />
                        </p>
                        <p>
                            <label for="user_last_name">Last Name</label>
                            <br />
                            <input size="30" maxlength="50" class="gr-textInput" type="text" value="" name="user[last_name]" id="user_last_name" />
                        </p>
                        <p>
                            <label for="user_user_name">User Name</label>
                            <span class="greyText smallText">(customize your URL — goodreads.com/user_name)</span>
                            <br />
                            <input class="gr-textInput" autocomplete="off" size="30" type="text" name="user[user_name]" id="user_user_name" />
                        </p>

                        <div id="gender_fields">
                            <div id="gender_selector">
                                <label for="user_gender">Gender</label><br />
                                <select name="user[gender]" id="user_gender"><option value="">Select</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                            </div>
                        </div>
                        <p id="city">
                            <label for="user_city">City</label><br />
                            <input size="30" class="gr-textInput" type="text" value="" name="user[city]" id="user_city" />
                        </p>
                        <p>
                            <label for="user_country_code">Country</label><br />
                            <select onchange="checkCountry();" name="user[country_code]" id="user_country_code" />
                            <option selected="selected" value="">Select</option>
                            <option value="US">United States</option>
                        </p>
                        <p>
                            <label for="user_born_at">Date of Birth</label>
                            <br />
                            <select id="user_born_at_1i" name="user[born_at(1i)]">
                                <option value=""></option>
                                <option value="2008">2008</option>
                                <option value="2007">2007</option>
                                <option value="2006">2006</option>
                                <option value="2005">2005</option>
                                <option value="2004">2004</option>
                                <option value="2003">2003</option>
                                <option value="2002">2002</option>
                                <option value="2001">2001</option>
                                <option value="2000">2000</option>
                                <option value="1999">1999</option>
                                <option value="1998">1998</option>
                                <option value="1997">1997</option>
                                <option value="1996">1996</option>
                                <option value="1995">1995</option>
                                <option value="1994">1994</option>
                                <option value="1993">1993</option>
                                <option value="1992">1992</option>
                                <option value="1991">1991</option>
                                <option value="1990">1990</option>
                                <option value="1989">1989</option>
                                <option value="1988">1988</option>
                                <option value="1987">1987</option>
                                <option value="1986">1986</option>
                                <option value="1985">1985</option>
                                <option value="1984">1984</option>
                                <option value="1983">1983</option>
                                <option value="1982">1982</option>
                                <option value="1981">1981</option>
                                <option value="1980">1980</option>
                                <option value="1979">1979</option>
                                <option value="1978">1978</option>
                                <option value="1977">1977</option>
                                <option value="1976">1976</option>
                                <option value="1975">1975</option>
                                <option value="1974">1974</option>
                                <option value="1973">1973</option>
                                <option value="1972">1972</option>
                                <option value="1971">1971</option>
                                <option value="1970">1970</option>
                                <option value="1969">1969</option>
                                <option value="1968">1968</option>
                                <option value="1967">1967</option>
                                <option value="1966">1966</option>
                                <option value="1965">1965</option>
                                <option value="1964">1964</option>
                                <option value="1963">1963</option>
                                <option value="1962">1962</option>
                                <option value="1961">1961</option>
                                <option value="1960">1960</option>
                                <option value="1959">1959</option>
                                <option value="1958">1958</option>
                                <option value="1957">1957</option>
                                <option value="1956">1956</option>
                                <option value="1955">1955</option>
                                <option value="1954">1954</option>
                                <option value="1953">1953</option>
                                <option value="1952">1952</option>
                                <option value="1951">1951</option>
                                <option value="1950">1950</option>
                                <option value="1949">1949</option>
                                <option value="1948">1948</option>
                                <option value="1947">1947</option>
                                <option value="1946">1946</option>
                                <option value="1945">1945</option>
                                <option value="1944">1944</option>
                                <option value="1943">1943</option>
                                <option value="1942">1942</option>
                                <option value="1941">1941</option>
                                <option value="1940">1940</option>
                                <option value="1939">1939</option>
                                <option value="1938">1938</option>
                                <option value="1937">1937</option>
                                <option value="1936">1936</option>
                                <option value="1935">1935</option>
                                <option value="1934">1934</option>
                                <option value="1933">1933</option>
                                <option value="1932">1932</option>
                                <option value="1931">1931</option>
                                <option value="1930">1930</option>
                                <option value="1929">1929</option>
                                <option value="1928">1928</option>
                                <option value="1927">1927</option>
                                <option value="1926">1926</option>
                                <option value="1925">1925</option>
                                <option value="1924">1924</option>
                                <option value="1923">1923</option>
                                <option value="1922">1922</option>
                                <option value="1921">1921</option>
                            </select>
                            <select id="user_born_at_2i" name="user[born_at(2i)]">
                                <option value=""></option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                            <select id="user_born_at_3i" name="user[born_at(3i)]">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                        </p>

                        <p>
                            <label for="user_expert_tags">My Interests</label> — favorite subjects, or really anything you know a lot about <br />
                            <span class="smallText"><i>(in comma separated phrases, please)</i></span><br />
                            <input class="gr-textInput" type="text" value="" name="user[expert_tags]" id="user_expert_tags" />
                        </p>
                        <p>
                            <label for="user_favorite_books">What Kind of Books Do You Like to Read?</label><br />
                            <textarea rows="1" class="gr-textarea" name="user[favorite_books]" id="user_favorite_books"></textarea>
                        </p>


                    </div>
                    <div className={styles.rightBox}>
                        <p>
                            <a  href="/photo/user/132083274?photo=profile"><img src="https://s.gr-assets.com/assets/nophoto/user/u_111x148-9394ebedbb3c6c218f64be9549657029.png" alt="U 111x148" /></a>
                            <br />
                            <input size="25" type="file" name="user[photo]" id="user_photo" />
                            <br />
                            <input type="submit" name="commit" value="Upload Photo" class="gr-button gr-button--small" /><br />

                        </p>
                        <p>
                            <a class="actionLinkLite notice" href="/user/destroy">Delete my account</a>
                        </p>


                    </div>
                    <p><input type="submit" name="commit" value="Save Profile Settings" class="gr-button u-marginLeftXSmall" /></p>
                </form>
            </div>
        </div>
    )
}