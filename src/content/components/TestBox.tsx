import React, { Children, FC } from "react";

type TestConsoleProps = {
  children?: React.ReactNode,
}

const TestConsole: FC<TestConsoleProps> = ({ children }) => {
  return (
    <div className="flex items-center fixed bottom-1 left-5 h-36 w-96 bg-purple-300">
      {children}
    </div>
  )
}

export default TestConsole;