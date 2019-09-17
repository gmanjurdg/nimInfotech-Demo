import React, { Component } from 'react';

class Information extends Component {
    render() {
        return (
            <div style= {{background: "blue"}}>
                <h1>This information about Python syntax</h1>
                <p>What makes it so? Like Java, Python syntax is clear, intuitive and almost similar to
                   the English language. Python’s “object-based” subset is somewhere similar to JavaScript.
                   According to Stack Overflow, there is one section which says “To be adopted or migrated to
                   be—or to migrate too soon”, and for python, it’s 12% which is highest. Broadly, people who
                   have migrated to python are close to 42%, which signifies it to be at number. Instead, Java programs are
                     interpreted by the Java Virtual Machine, or JVM, which runs on
                     multiple platforms. This means all Java programs are multiplatform
                     and can run on different platforms, including Macintosh, Windows,
                     and Unix computers.</p>
            </div>
        );
    }
}

export default Information;