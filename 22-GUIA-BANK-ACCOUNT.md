# Guía de Respuestas: Programa de Gestión de Cuentas Bancarias
## freeCodeCamp JavaScript v9 — Proyecto de Certificación

---

## DESCRIPCIÓN DEL PROYECTO

**Tipo:** Laboratorio / Proyecto de certificación  
**Título:** Desarrollar un Programa de Gestión de Cuentas Bancarias  
**URL:** `https://www.freecodecamp.org/espanol/learn/javascript-v9/lab-bank-account-manager/build-a-bank-account-management-program`

Este proyecto es **solo JavaScript** (script.js). Debes crear una clase `BankAccount` con sus métodos.

---

## ESTRUCTURA REQUERIDA

```
class BankAccount
  constructor()
    - balance = 0
    - transactions = []
  
  deposit(amount)
    - Añade objeto {type: "deposit", amount} a transactions
    - Actualiza balance
    - Retorna mensaje de éxito o error
  
  withdraw(amount)
    - Añade objeto {type: "withdraw", amount} a transactions
    - Actualiza balance
    - Retorna mensaje de éxito o error
  
  checkBalance()
    - Retorna "Current balance: $[balance]"
  
  listAllDeposits()
    - Retorna "Deposits: amount,amount,..."
  
  listAllWithdrawals()
    - Retorna "Withdrawals: amount,amount,..."

const myAccount = new BankAccount()
  - Al menos 5 transacciones
  - Al menos 2 depósitos
  - Al menos 2 retiros
  - Balance > $100
```

---

## SOLUCIÓN COMPLETA — script.js

```js
class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }
    this.transactions.push({ type: "deposit", amount: amount });
    this.balance += amount;
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }
    this.transactions.push({ type: "withdraw", amount: amount });
    this.balance -= amount;
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions
      .filter(t => t.type === "deposit")
      .map(t => t.amount);
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(t => t.type === "withdraw")
      .map(t => t.amount);
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

// Instancia con al menos 5 transacciones, 2 depósitos, 2 retiros, balance > $100
const myAccount = new BankAccount();
myAccount.deposit(500);
myAccount.deposit(300);
myAccount.withdraw(100);
myAccount.withdraw(50);
myAccount.deposit(200);
```

---

## DESGLOSE LÍNEA A LÍNEA

### `constructor()`
- `this.balance = 0` — balance inicial en 0
- `this.transactions = []` — array vacío para guardar el historial

### `deposit(amount)`
1. Si `amount <= 0`: retorna `"Deposit amount must be greater than zero."`
2. `this.transactions.push({ type: "deposit", amount: amount })` — guarda la transacción
3. `this.balance += amount` — actualiza el saldo
4. Retorna `` `Successfully deposited $${amount}. New balance: $${this.balance}` ``

### `withdraw(amount)`
1. Si `amount <= 0 || amount > this.balance`: retorna `"Insufficient balance or invalid amount."`
2. `this.transactions.push({ type: "withdraw", amount: amount })` — guarda la transacción
3. `this.balance -= amount` — actualiza el saldo
4. Retorna `` `Successfully withdrew $${amount}. New balance: $${this.balance}` ``

### `checkBalance()`
Retorna `` `Current balance: $${this.balance}` ``

### `listAllDeposits()`
- Filtra `transactions` donde `type === "deposit"`
- Extrae solo los `amount` con `.map(t => t.amount)`
- Une con coma: `.join(",")`
- Retorna `` `Deposits: ${deposits.join(",")}` ``

### `listAllWithdrawals()`
Igual que `listAllDeposits` pero filtrando `type === "withdraw"` y el prefijo `"Withdrawals: "`.

---

## LOS 22 TESTS — Verificación

### Test 1 — Clase BankAccount existe
**✅ Respuesta:** `class BankAccount { ... }`

---

### Test 2 — Constructor con balance=0 y transactions=[]
**✅ Respuesta:**
```js
constructor() {
  this.balance = 0;
  this.transactions = [];
}
```

---

### Test 3 — Método deposit existe
**✅ Respuesta:** `deposit(amount) { ... }` definido dentro de la clase.

---

### Test 4 — Método withdraw existe
**✅ Respuesta:** `withdraw(amount) { ... }` definido dentro de la clase.

---

### Test 5 — Método checkBalance existe
**✅ Respuesta:** `checkBalance() { ... }` definido dentro de la clase.

---

### Test 6 — Método listAllDeposits existe
**✅ Respuesta:** `listAllDeposits() { ... }` definido dentro de la clase.

---

### Test 7 — Método listAllWithdrawals existe
**✅ Respuesta:** `listAllWithdrawals() { ... }` definido dentro de la clase.

---

### Test 8 — deposit(100) con balance 0 devuelve mensaje correcto
**Input:** cuenta nueva, `deposit(100)`  
**✅ Respuesta:** `"Successfully deposited $100. New balance: $100"`

---

### Test 9 — deposit(-50) devuelve error
**Input:** `deposit(-50)`  
**✅ Respuesta:** `"Deposit amount must be greater than zero."`

---

### Test 10 — deposit(0) devuelve error
**Input:** `deposit(0)`  
**✅ Respuesta:** `"Deposit amount must be greater than zero."`  
> La condición es `amount <= 0`, entonces 0 también falla.

---

### Test 11 — withdraw(150) con balance 100 devuelve error
**Escenario:** balance = 100, `withdraw(150)`  
**✅ Respuesta:** `"Insufficient balance or invalid amount."`  
> 150 > 100 → falla.

---

### Test 12 — withdraw(-50) devuelve error
**Input:** `withdraw(-50)`  
**✅ Respuesta:** `"Insufficient balance or invalid amount."`  
> -50 <= 0 → falla.

---

### Test 13 — withdraw(0) devuelve error
**Input:** `withdraw(0)`  
**✅ Respuesta:** `"Insufficient balance or invalid amount."`  
> 0 <= 0 → falla.

---

### Test 14 — withdraw(150) con balance 200 devuelve éxito
**Escenario:** balance = 200, `withdraw(150)`  
**✅ Respuesta:** `"Successfully withdrew $150. New balance: $50"`

---

### Test 15 — checkBalance() con balance 200
**Escenario:** balance = 200  
**✅ Respuesta:** `"Current balance: $200"`

---

### Test 16 — listAllDeposits con depósitos 10, 35, 90
**Escenario:** Se depositaron 10, 35, 90  
**✅ Respuesta:** `"Deposits: 10,35,90"`  
> Sin espacios entre los números, solo coma.

---

### Test 17 — listAllWithdrawals con retiros 20, 50, 100
**Escenario:** Se retiraron 20, 50, 100  
**✅ Respuesta:** `"Withdrawals: 20,50,100"`  
> Sin espacios entre los números, solo coma.

---

### Test 18 — Instancia myAccount existe
**✅ Respuesta:** `const myAccount = new BankAccount();`

---

### Test 19 — myAccount tiene al menos 5 transacciones
**✅ Respuesta:** Llama a `deposit()` o `withdraw()` al menos 5 veces en total sobre `myAccount`. El test verifica que `myAccount.transactions.length >= 5` — no escribas esa expresión en el código, llama a los métodos reales:
```js
myAccount.deposit(200);
myAccount.deposit(150);
myAccount.withdraw(50);
myAccount.withdraw(40);
myAccount.deposit(30);
```

---

### Test 20 — myAccount tiene al menos 2 depósitos
**✅ Respuesta:** Llama a `myAccount.deposit(...)` al menos 2 veces.

---

### Test 21 — myAccount tiene al menos 2 retiros
**✅ Respuesta:** Llama a `myAccount.withdraw(...)` al menos 2 veces.

---

### Test 22 — myAccount tiene balance > $100
**✅ Respuesta:** Asegúrate de que los depósitos superen los retiros por más de $100.  
En la solución: `500 + 300 + 200 - 100 - 50 = 850` → balance = $850 ✓

---

## PUNTOS CRÍTICOS

**¿Por qué `type: "deposit"` y no `type: "Deposit"`?**  
Los filtros usan `t.type === "deposit"` (minúscula). Debe coincidir exactamente.

**Formato exacto de los mensajes — sin errores:**
- `` `Successfully deposited $${amount}. New balance: $${this.balance}` ``
- `"Deposit amount must be greater than zero."`
- `` `Successfully withdrew $${amount}. New balance: $${this.balance}` ``
- `"Insufficient balance or invalid amount."`
- `` `Current balance: $${this.balance}` ``
- `` `Deposits: ${deposits.join(",")}` `` ← coma sin espacios
- `` `Withdrawals: ${withdrawals.join(",")}` `` ← coma sin espacios

**¿Cuándo fallaría withdraw?**  
Dos condiciones con `||`: `amount <= 0` (inválido) OR `amount > this.balance` (insuficiente). Ambas retornan el mismo mensaje de error.

---

## RESUMEN DE CONCEPTOS CLAVE

| Concepto | Uso en este proyecto |
|---|---|
| `class` | Define la clase BankAccount |
| `constructor()` | Inicializa balance y transactions |
| `this.balance` | Propiedad del objeto actual |
| `this.transactions.push({})` | Añade objeto al array |
| `.filter(t => t.type === "deposit")` | Filtra transacciones por tipo |
| `.map(t => t.amount)` | Extrae solo el monto |
| `.join(",")` | Une array en string separado por coma |
| `new BankAccount()` | Crea una instancia de la clase |

---

*Fin de la guía — Módulo: Gestión de Cuentas Bancarias (Proyecto de Certificación #22)*
