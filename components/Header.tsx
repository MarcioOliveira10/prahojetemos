/** @jsxRuntime automatic */
/** @jsxImportSource theme-ui */
import styles from "styles/Home.module.css"
import { Flex } from "theme-ui";

function Header() {
    return (
        <Flex sx={{
            bg: "primary",
            width: "100%",
            height: 200,
            px: [20, null, null, 0],
            py: [20, null, null, 80]

        }}
        >
            <Flex
                sx={{
                    width: ['100%, null, null, 1024'],
                    margin: '0 auto',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Flex sx={{
                    color: 'white', width: ['100%', null, null, '50%'], flexDirection: 'column'
                }}>
                    <h1>As notícias dos principais veículos de comunicação pesquisados na internet</h1>
                    <h2>Aqui você encontra as melhores materias dos termos mais pesquisados da net das últimas 24 horas.</h2>
                </Flex>
                <Flex sx={{ width: ['100%', null, null, '50%'] }}></Flex>

            </Flex>
        </Flex>
    )
}

export default Header;