let pyodideInitPromise = null;

export async function loadPyodideAndSudoku() {
  if (!pyodideInitPromise) {
    pyodideInitPromise = (async () => {
      if (!globalThis.pyodide) {
        await new Promise((resolve, reject) => {
          if (window.loadPyodide) {
            resolve(window.loadPyodide);
            return;
          }

          const script = document.createElement("script");
          script.src = "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js";
          script.async = true;
          script.onload = () => resolve(window.loadPyodide);
          script.onerror = reject;
          document.head.appendChild(script);
        });

        const loadPyodide = window.loadPyodide;
        // @ts-ignore
        globalThis.pyodide = await loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/" });
        await globalThis.pyodide.loadPackage(["numpy"]);

        const sudokuPath = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/sudoku.py`;
        const resp = await fetch(sudokuPath);
        const source = await resp.text();
        if (!resp.ok) {
          throw new Error(`Failed to fetch sudoku.py: ${resp.status} ${resp.statusText}`);
        }

        await globalThis.pyodide.runPythonAsync(`import json\n${source}`);
      }

      return globalThis.pyodide;
    })();
  }

  return pyodideInitPromise;
}