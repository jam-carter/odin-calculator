/* css layout for calculator*/

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #8EB897;
    color: rgb(255, 255, 255);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
}

.calculator {
    display: flex;
    flex-direction: column;
    background-color: #5E6973;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    height: 400px;
    border: 2px solid black;
}

.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    margin-top: 10px;
    font-size: 20px;
}

.screen {
    grid-column: 1 / 5;
    color: black;
    background-color: rgba(228, 226, 226, 0.945);
    border-radius: 10px;
    border: 2px solid black;
    text-align: right;
    font-size: 40px;
    padding: 10px 20px;
}

.btn {
    background-color: rgb(255, 255, 255);
    border: 2px solid black;
    border-radius: 10px;
    font-size: 20px;
}

.btn-operation {
    background-color: #A4BFEB;
    color: black;
    border: 2px solid black;
    border-radius: 10px;
    font-size: 20px;
}

.btn-clear {
    background-color: #E3655B;
    color: black;
    border: 2px solid black;
    border-radius: 10px;
    font-size: 20px;
}

.footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    background-color: #5E6973;
    color: rgb(255, 255, 255);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
    font-size: 20px;
}
