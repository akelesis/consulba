<template>
  <div class="dashmed-container">
    <span>Painel de Atendimentos</span>
    <div class="atendimentos-div">
        <div class="pacientes-div">
            <div class="pacientes-box">
                <TextBoxRadio 
                    v-for="paciente in pacientes" 
                    :key="paciente.appoint_id" 
                    :option="'paciente_' + paciente.appoint_id" 
                    :text="paciente.time + ' - ' + paciente.patient_name"
                    @click.native="setAppointment(paciente)"
                />
            </div>
        </div>
    </div>
    <div class="button-box-dashmed">
        <Button
            text="ABRIR ATENDIMENTO"
            color="background-color: rgb(71, 129, 175);"
        />
    </div>
  </div>
</template>

<script>
import Button from '../components/Button'
import TextBoxRadio from '../components/TextBoxRadio'
import axios from 'axios'

export default {
    name: "DashMed",
    components: {
        Button,
        TextBoxRadio
    },
    data() {
        return {
            pacientes: [
                {appoint_id: 1, doctor_id: 2, date: "2020-04-10", time: "7:00", patient_name:"Valber", patient_email: "Valber@hotmail.com"}, 
                {appoint_id: 2, doctor_id: 2, date: "2020-04-10", time: "7:20", patient_name:"Jão", patient_email: "Jao@hotmail.com"}, 
                {appoint_id: 3, doctor_id: 2, date: "2020-04-10", time: "7:40", patient_name:"Marquin", patient_email: "Marquin@hotmail.com"}
            ],
            appointment: {}
        }
    },
    methods: {
        setAppointment(paciente){
            this.appointment = paciente
        },
        saveAppointment(){
            this.$store.state.appointment = this.appointment
            let mail = {patient_email: this.appointment.patient_email, subject: "[CONSULBA] LINK DE CONSULTA DISPONÍVEL", text: `Olá ${this.appointment.patient_name}\nO link da sua consulta já está disponível e deve ser acessado imediatamente, basta clicar no link a seguir\n\nhttps://meet.jit.si//${this.appointment.pacient_email}_${this.$store.state.user.doctor_name}`}
            axios.post('http://localhost:3000/mail', mail)
                .then(() => {
                    this.$router.push('/room/' + this.appointment.doctor_id)
                })
                .catch(err => {
                    alert(err)
                })
        }
    }
}
</script>

<style>
.dashmed-container {
    display: flex;
    flex-wrap: wrap;
}

.dashmed-container span {
    margin-top: 50px;
    color: rgb(58, 113, 158);
    font-size: 35px;
    width: 100vw;
    height: auto;
}

.atendimentos-div {
    display: flex;
    justify-content: center;
    width: 100vw;
}

.pacientes-div{
    overflow-y: scroll;
    background-color: #ccc7;
    margin-top: 50px;
    width: 75vw;
    height: 50vh;
}

.pacientes-div div {
    margin: 10px;
}

.pacientes-box {
    display: flex;
    flex-wrap: wrap;
    height: auto;
}

.button-box-dashmed{
    display: flex;
    justify-content: center;
    width: 100vw;
    margin-top: 3vw;
}
</style>