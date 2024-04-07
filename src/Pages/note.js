import React from 'react';
import Nav from '../components/navbar2'
function Dropdown() {
    return (
        <div>
            <Nav /><br/><br/><br/><br/> 
            <table>
                <thead>
                    <tr>
                        <td class="day" id="color">Note No</td>
                        <td class="day" id="color">Title</td>
                        <td class="day" id="color">Created By</td>
                        <td class="day" id="color">Created On</td>
                        <td class="day" id="color">Contant</td>
                        <td class="day" id="color">Edit</td>
                        <td class="day" id="color">Delete</td>
                    </tr>
                    <tr>
                        <td class="day" id="color">01</td>
                        <td ><br /></td>
                        <td ><br /></td>
                        <td ><br /></td>
                        <td ><br /></td>
                        <td ><br /></td>
                        <td ><br /></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="day" id="color">02</td>
                        <td></td>
                        <td></td>
                        <td rowspan="5" class="lunch">L<br></br>u<br></br>n<br></br>c<br></br>h</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="day" id="color">03</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="day" id="color">04</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="day" id="color">05</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td class="day" id="color">06</td>
                        <td></td>
                        <td></td>
                        <td></td>   
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>


        </div>
    );
}

export default Dropdown;
