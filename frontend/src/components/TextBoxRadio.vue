<template>
  <div class="text-box-radio-container">
      <input type="radio" name="option" :id="option" :value="radioValue">
      <label :for="option">{{ text }}</label>
  </div>
</template>

<script>
export default {
    name: "TextBoxRadio",
    data() {
        return {
            themeAtend: "text-box-radio-container",
            flag: true
        }
    },
    props: {
        option: String,
        text: String,
        radioValue: String
    }/*,
    methods: {
        selected(){
            if(this.flag){
                this.themeAtend = "text-box-radio-container-clicked"
                this.flag = false
            }
            else {
                this.themeAtend = "text-box-radio-container"
                this.flag = true
            }
        }
    }*/
}
</script>

<style>
.text-box-radio-container input[type=radio]{
    display: none;
}

.text-box-radio-container input[type=radio]+label{
    cursor: pointer;
    border: 2px solid rgb(89, 158, 247);
    color: #fff;
    font-size: 30px;
    color: rgb(58, 113, 158);
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 380px;
    min-height: 50px;
    border-radius: 10px;
}

.text-box-radio-container input[type=radio]:checked + label{
    color: white;
    background-color: rgb(139, 189, 254);
}

/*.text-box-radio-container p{
    font-size: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
}

.text-box-radio-container-clicked {
    cursor: pointer;
    border: 2px solid rgb(89, 158, 247);
    border-radius: 10px;
    background-color: rgb(139, 189, 254);
    width: 380px;
    height: 50px;
}

.text-box-radio-container-clicked p{
    font-size: 25px;
    color: white;
    margin-top: 10px;
    margin-bottom: 10px;
}

/* @keyframes clicked {
    
} */
</style>