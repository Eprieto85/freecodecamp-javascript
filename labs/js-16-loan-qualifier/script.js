const T={
  en:{badge:"freeCodeCamp · JS Certification",hero_label:"Functions · if/else if · Lab 16",
    hero_sub:"Banks run this exact logic millions of times per day. Adjust your income and credit score to see your eligibility in real time.",
    income_label:"ANNUAL INCOME",credit_label:"CREDIT SCORE",
    table_title:"// Loan eligibility thresholds",
    th_loan:"LOAN TYPE",th_income:"MIN INCOME",th_credit:"MIN CREDIT",
    loan_duplex:"Duplex",loan_condo:"Condo",loan_car:"Car",
    ctx_title:"getLoanMessage(annualIncome, creditScore)",
    ctx_text:"this if/else if chain is the core of every credit decision engine. Banks, fintechs and mortgage apps use the same cascading logic to match a customer's profile against tiered eligibility rules.",
    footer:"Loan Qualifier · Lab 16 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  es:{badge:"freeCodeCamp · Certificación JS",hero_label:"Funciones · if/else if · Lab 16",
    hero_sub:"Los bancos ejecutan esta lógica millones de veces al día. Ajusta tus ingresos y puntaje de crédito para ver tu elegibilidad en tiempo real.",
    income_label:"INGRESOS ANUALES",credit_label:"PUNTAJE CREDITICIO",
    table_title:"// Umbrales de elegibilidad de préstamos",
    th_loan:"TIPO DE PRÉSTAMO",th_income:"INGRESO MÍN",th_credit:"CRÉDITO MÍN",
    loan_duplex:"Dúplex",loan_condo:"Apartamento",loan_car:"Auto",
    ctx_title:"getLoanMessage(annualIncome, creditScore)",
    ctx_text:"esta cadena if/else if es el núcleo de todo motor de decisión crediticia. Bancos, fintechs y apps de hipotecas usan la misma lógica en cascada para evaluar el perfil del cliente.",
    footer:"Calificador de Préstamos · Lab 16 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"},
  fr:{badge:"freeCodeCamp · Certification JS",hero_label:"Fonctions · if/else if · Lab 16",
    hero_sub:"Les banques exécutent cette logique des millions de fois par jour. Ajustez vos revenus et votre score de crédit pour voir votre éligibilité en temps réel.",
    income_label:"REVENU ANNUEL",credit_label:"SCORE DE CRÉDIT",
    table_title:"// Seuils d'éligibilité aux prêts",
    th_loan:"TYPE DE PRÊT",th_income:"REVENU MIN",th_credit:"CRÉDIT MIN",
    loan_duplex:"Duplex",loan_condo:"Appartement",loan_car:"Voiture",
    ctx_title:"getLoanMessage(annualIncome, creditScore)",
    ctx_text:"cette chaîne if/else if est au cœur de tout moteur de décision de crédit. Banques, fintechs et apps hypothécaires utilisent la même logique en cascade.",
    footer:"Qualification de Prêt · Lab 16 · <strong>Edisson Prieto</strong> · <a href='https://github.com/Eprieto85'>GitHub</a>"}
};
function setLang(l){
  document.querySelectorAll('[data-i18n]').forEach(el=>{const k=el.getAttribute('data-i18n');if(T[l][k]!==undefined)el.innerHTML=T[l][k];});
  document.querySelectorAll('.lb').forEach(b=>b.classList.remove('active'));
  document.getElementById('btn-'+l).classList.add('active');
}
setLang('en');

const minIncomeForDuplex=60000,minCreditScoreForDuplex=700;
const minIncomeForCondo=45000,minCreditScoreForCondo=680;
const minIncomeForCar=30000,minCreditScoreForCar=650;

function getLoanMessage(annualIncome,creditScore){
  if(creditScore>=minCreditScoreForDuplex&&annualIncome>=minIncomeForDuplex)
    return "You qualify for a duplex, condo, and car loan.";
  else if(annualIncome>=minIncomeForCondo&&creditScore>=minCreditScoreForCondo)
    return "You qualify for a condo and car loan.";
  else if(annualIncome>=minIncomeForCar&&creditScore>=minCreditScoreForCar)
    return "You qualify for a car loan.";
  else return "You don't qualify for any loans.";
}

function update(){
  const income=parseInt(document.getElementById('income-slider').value);
  const credit=parseInt(document.getElementById('credit-slider').value);
  document.getElementById('income-val').textContent=income.toLocaleString();
  document.getElementById('credit-val').textContent=credit;

  const msg=getLoanMessage(income,credit);
  const card=document.getElementById('result-card');
  const icon=document.getElementById('res-icon');
  const title=document.getElementById('res-title');
  const msgEl=document.getElementById('res-msg');
  const badges=document.getElementById('loan-badges');

  // Determine tier
  const hasDuplex=credit>=minCreditScoreForDuplex&&income>=minIncomeForDuplex;
  const hasCondo=income>=minIncomeForCondo&&credit>=minCreditScoreForCondo;
  const hasCar=income>=minIncomeForCar&&credit>=minCreditScoreForCar;

  card.className='result-card';
  if(hasDuplex){
    card.classList.add('res-eligible');
    icon.textContent='🏠';
    title.className='res-title green';title.textContent='Fully Eligible';
  }else if(hasCondo){
    card.classList.add('res-partial');
    icon.textContent='🏢';
    title.className='res-title yellow';title.textContent='Partially Eligible';
  }else if(hasCar){
    card.classList.add('res-partial');
    icon.textContent='🚗';
    title.className='res-title yellow';title.textContent='Car Loan Only';
  }else{
    card.classList.add('res-denied');
    icon.textContent='❌';
    title.className='res-title red';title.textContent='Not Eligible';
  }
  msgEl.textContent=msg;

  const loans=['Duplex','Condo','Car'];
  const eligible=[hasDuplex,hasCondo||hasDuplex,hasCar||hasCondo||hasDuplex];
  badges.innerHTML=loans.map((l,i)=>`<span class="l-badge ${eligible[i]?'b-green':'b-gray'}">${eligible[i]?'✓':'-'} ${l}</span>`).join('');

  // Highlight table rows
  document.getElementById('row-duplex').className=hasDuplex?'active':'';
  document.getElementById('row-condo').className=(hasCondo||hasDuplex)?'active':'';
  document.getElementById('row-car').className=(hasCar||hasCondo||hasDuplex)?'active':'';
}
update();
