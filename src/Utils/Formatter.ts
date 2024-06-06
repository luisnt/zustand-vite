const Formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
})

const format = Formatter.format

export default format