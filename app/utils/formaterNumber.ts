export default function formaterValues(number: string) {
  const convertNumber = parseFloat(number);
  const valoresFormatados = convertNumber.toLocaleString("pt-BR", {
    style: "decimal",
    minimumFractionDigits: 2,
  });
  return valoresFormatados;
}
