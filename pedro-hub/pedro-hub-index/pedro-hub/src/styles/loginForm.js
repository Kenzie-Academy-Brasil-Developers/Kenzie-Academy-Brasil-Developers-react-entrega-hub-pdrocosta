const styledLoginForm = styled.section`
background-color: var(--color-grey-3);
display: flex;
flex-direction: column;
label{
    width: 20%;
    padding: 10px;

}
form{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
}
.div_Cadastro{
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.btn_submit{
    width: 90%;
    background-color: var(--color-primary);
    padding: 2%;
}
.btn_cadastrar{
    width: 90%;
    background-color: var(--color-grey-1);
    padding: 2%;
}
`
export default styledLoginForm