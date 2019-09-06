import "./styles.css";

document.getElementById("app").innerHTML = `
<div>
<h1 align="center">Tic Tac Toe</h1>
<table>
  <tr>
    <td>
      <button type="button" class="cell" id="cell00" onclick = "game()" />
    </td>
    <td>
      <button type="button" class="cell" id="cell01" onclick = "game()" />
    </td>
    <td>
      <button type="button" class="cell" id="cell02" onclick = "game()" />
    </td>
    <td>
      <button type="button" class="cell" id="cell03" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell04" onclick = "game()"/>
    </td>
  </tr>
  <tr>
    <td>
      <button type="button" class="cell" id="cell10" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell11" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell12" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell13" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell14" onclick = "game()"/>
    </td>
  </tr>
  <tr>
    <td>
      <button type="button" class="cell" id="cell20" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell21" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell22" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell23" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell24" onclick = "game()"/>
    </td>
  </tr>
  <tr>
    <td>
      <button type="button" class="cell" id="cell30" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell31" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell32" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell33" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell34" onclick = "game()"/>
    </td>
  </tr>
  <tr>
    <td>
      <button type="button" class="cell" id="cell00" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell01" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell02" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell03" onclick = "game()"/>
    </td>
    <td>
      <button type="button" class="cell" id="cell04" onclick = "game()"/>
    </td>
  </tr>
</table>
</div>
`;

function game() {
  document.getElementById("cell00").innerHTML = "X";
}
