export const fetchWalletBalance = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve(2000), 1000)
  ); /* Simulates fetching a user’s wallet balance */

export const fetchTransactions = () =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          { id: 1, amount: -300, date: "2025-07-01" },
          { id: 2, amount: +600, date: "2025-07-02" },
        ]),
      1000
    )
  ); /* Simulates transaction history */

export const fetchUsers = () =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve([
          { id: 1, name: "Yared", active: true },
          { id: 2, name: "Elilta", active: false },
        ]),
      1000
    )
  ); /* Simulates fetching users for admin */

export const fetchSystemStats = () =>
  new Promise((resolve) =>
    setTimeout(
      () =>
        resolve({
          totalPayments: 10000,
          activeUsers: 5,
        }),
      1000
    )
  ); /* Simulates system-level stats for superadmin */