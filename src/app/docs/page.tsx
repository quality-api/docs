import { Metadata } from "next";
import Heading from "@/components/atoms/Heading";
import SheetPageTemplate from "@/components/templates/SheetPageTemplate";

export const metadata: Metadata = { title: "Introduction" };

function Page() {
    return (
        <SheetPageTemplate title="Introduction">
            <Heading variant="h2" hash="what-is-quality-api">
                What exactly is Quality API?
            </Heading>

            <p>
                Quality API is an open-source library designed as a lightweight wrapper for Next.js API endpoints.
                It simplifies the process of creating, managing, and standardizing API routes in Next.js applications, providing developers with a streamlined way to handle requests, responses, and common API-related tasks.
                By abstracting away boilerplate code and offering built-in utilities, Quality API helps ensure consistency, reliability, and maintainability in your API layer.
            </p>

            <Heading variant="h2" hash="why-use-quality-api">
                Why use Quality API?
            </Heading>

            <Heading variant="h3">
                Quit the context-switching
            </Heading>

            <p>
                Quality API eliminates the need to context-switch between your frontend and a separate backend codebase by allowing you to build, test, and iterate on your API logic directly within your Next.js project.
                This integration streamlines development, reduces cognitive overhead, and accelerates iteration—all while keeping your codebase cohesive, your tooling consistent, and your deployment process simpler.
                The result is faster, more maintainable development without sacrificing flexibility or scalability.
            </p>

            <p>Centralize your project.</p>

            <Heading variant="h3">
                Get away from type-induced headaches
            </Heading>

            <p>
                Type-safety provides compile-time guarantees that your data conforms to expected structures, catching errors early and reducing runtime bugs.
                Unlike guessing types or using workarounds like <code>as</code>, <code>any</code>, or type assertions, which bypass checks and risk silent failures, type-safety ensures reliability, improves maintainability, and enhances developer experience with autocompletion and clear contracts.
                This leads to more robust, predictable, and self-documenting code.
            </p>

            <Heading variant="h3">
                Lightweight
            </Heading>

            <p>
                Quality API has zero dependencies - it's purely TypeScript.
                <br />
                The dependencies are what you want them to be.
            </p>
        </SheetPageTemplate>
    );
}

export default Page;