const form = document.getElementById("add-budget-form"),
    form2 = document.getElementById("add-expense-form");

let budgetAmtEle = document.querySelector(".budget-amt"),
    totalExpEle = document.querySelector(".expense-total"),
    balanceAmtEle = document.querySelector(".balance-amt"),
    expWrapper = document.querySelector(".exp-wrapper");

let allExpenses = [];
let editIndex = -1; // Track if editing an expense

// Update total expense calculation
let totalExp = allExpenses.reduce((total, value) => total + value.amount, 0);
totalExpEle.textContent = totalExp ? '₹' + totalExp.toFixed(2) : '₹0.00';

// Add budget
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let budgetInput = document.querySelector(".budget-input");
    func(budgetInput.value);
    budgetInput.value = "";
});

// Add or update expense
form2.addEventListener("submit", (e) => {
    e.preventDefault();

    let expNameInput = document.querySelector(".expense-name"),
        expAmtInput = document.querySelector(".expense-amt"),
        submitBtn = form2.getElementsByTagName("button")[0];

    let expDetails = {
        name: expNameInput.value,
        amount: parseFloat(expAmtInput.value)
    };

    if (editIndex === -1) {
        // Add new expense
        allExpenses.push(expDetails);
        submitBtn.textContent = "Add Expense";
    } else {
        // Update existing expense
        allExpenses[editIndex] = expDetails;
        editIndex = -1; // Reset editIndex
        submitBtn.textContent = "Add Expense";
    }

    expNameInput.value = "";
    expAmtInput.value = "";

    displayExpenses();
    updateTotal();
});

// Display budget and balance
const func = (budgetAmt) => {
    budgetAmtEle.textContent = budgetAmt ? '₹' + parseFloat(budgetAmt).toFixed(2) : '₹0.00';
    let balanceAmt = budgetAmt - totalExp;
    balanceAmtEle.textContent = balanceAmt ? '₹' + balanceAmt.toFixed(2) : "₹0.00";
};
func();

// Display expenses
const displayExpenses = () => {
    expWrapper.innerHTML = allExpenses.map((expense, index) => {
        return `
        <div class="p-3 mb-2 flex justify-between items-center bg-gray-100 rounded-sm">
            <h5 class="me-1 capitalize"> ${expense?.name} </h5>
            <div class="flex gap-5">
                <strong> ${expense?.amount.toFixed(2)} </strong>
                <span class="edit-expense" data-index="${index}"> <i class="fa-solid fa-pen-to-square text-sm cursor-pointer text-yellow-700"></i> </span>
                <span class="delete-expense" data-index="${index}"> <i class="fa-solid fa-trash text-sm cursor-pointer text-red-700"></i> </span>
            </div>
        </div>
        `;
    }).join("");

    // Attach event listeners for delete and edit after rendering
    attachEventListeners();
};

const updateTotal = () => {
    totalExp = allExpenses.reduce((total, value) => total + value.amount, 0);
    totalExpEle.textContent = totalExp ? '₹' + totalExp.toFixed(2) : '₹0.00';

    // Remove the currency symbol (₹) before parsing the budget amount
    let budgetAmt = parseFloat(budgetAmtEle.textContent.replace('₹', ''));
    let balanceAmt = budgetAmt - totalExp;

    balanceAmtEle.textContent = balanceAmt ? '₹' + balanceAmt.toFixed(2) : '₹0.00';
};


// Attach event listeners for delete and edit buttons
const attachEventListeners = () => {
    // Delete expense
    document.querySelectorAll(".delete-expense").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let expIdx = parseInt(btn.getAttribute("data-index"));
            
            let confirm = window.confirm("Are you sure you want to delete?")

            if(confirm){
                allExpenses.splice(expIdx, 1);
            }
            displayExpenses();
            updateTotal();
        });
    });

    // Edit expense
    document.querySelectorAll(".edit-expense").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let expIdx = parseInt(btn.getAttribute("data-index"));
            let expense = allExpenses[expIdx];
            document.querySelector(".expense-name").value = expense.name;
            document.querySelector(".expense-amt").value = expense.amount;
            editIndex = expIdx; // Set the index for editing

            let submitBtn = form2.getElementsByTagName("button")[0];
            submitBtn.textContent = "Update Expense";
        });
    });
};

displayExpenses();
