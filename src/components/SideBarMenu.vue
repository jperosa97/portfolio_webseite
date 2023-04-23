<template>
    <div class="socialMedia">
        <ul>
            <li>
                <a href="https://github.com/jperosa97">
                    <v-icon icon="mdi-github"></v-icon>
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/perosa-janick-665a49190/">
                    <v-icon icon="mdi-linkedin"></v-icon>
                </a>
            </li>
            <li>
                <a href="mailto:janick.perosa97@hotmail.com">
                    <v-icon icon="mdi-email"></v-icon>
                </a>

                <hr>
            </li>

        </ul>

    </div>
</template>

<style lang="scss">
.socialMedia {
    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        list-style: none;
        position: fixed;
        bottom: 75px;
        left: 50px;

        li {
            font-size: 35px;
            a {
                color: #FBFBFA;

                &:hover {
                    color: #42b983;
                }
            }

            hr {
                border: none;
                border-left: 2px solid #FBFBFA;
                height: 174px;
                margin-left: 25px;
            }
        }
    }
}
</style>