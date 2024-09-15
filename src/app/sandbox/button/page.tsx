import { BiPlus } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

import Typography from "@/components/Typography";
import Button from "@/components/buttons/Button";
import ButtonLink from "@/components/links/ButtonLink";

export default function ButtonPage() {
  return (
    <main className="min-h-screen items-center justify-center bg-slate-200 py-20">
      <section className="flex flex-col gap-8 px-24">
        <div>
          <Typography as="h2" variant="h2">
            Blue
          </Typography>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="blue"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Blue Button
            </Button>
            <Button variant="blue" leftIcon={BiPlus} rightIcon={BsArrowRight}>
              Blue Button
            </Button>
            <Button
              variant="blue"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Blue Button
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="blue"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Blue Disabled
            </Button>
            <Button
              variant="blue"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Blue Disabled
            </Button>
            <Button
              variant="blue"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Blue Disabled
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="blue"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Blue Disabled
            </Button>
            <Button
              variant="blue"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Blue Disabled
            </Button>
            <Button
              variant="blue"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Blue Disabled
            </Button>
          </div>
        </div>

        <div>
          <Typography as="h2" variant="h2">
            Green
          </Typography>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="green"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Green Button
            </Button>
            <Button variant="green" leftIcon={BiPlus} rightIcon={BsArrowRight}>
              Green Button
            </Button>
            <Button
              variant="green"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Green Button
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="green"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Green Disabled
            </Button>
            <Button
              variant="green"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Green Disabled
            </Button>
            <Button
              variant="green"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Green Disabled
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="green"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Green Disabled
            </Button>
            <Button
              variant="green"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Green Disabled
            </Button>
            <Button
              variant="green"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Green Disabled
            </Button>
          </div>
        </div>

        <div>
          <Typography as="h2" variant="h2">
            Yellow
          </Typography>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="yellow"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Yellow Button
            </Button>
            <Button variant="yellow" leftIcon={BiPlus} rightIcon={BsArrowRight}>
              Yellow Button
            </Button>
            <Button
              variant="yellow"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Yellow Button
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="yellow"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Yellow Disabled
            </Button>
            <Button
              variant="yellow"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Yellow Disabled
            </Button>
            <Button
              variant="yellow"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Yellow Disabled
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="yellow"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Yellow Disabled
            </Button>
            <Button
              variant="yellow"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Yellow Disabled
            </Button>
            <Button
              variant="yellow"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Yellow Disabled
            </Button>
          </div>
        </div>

        <div>
          <Typography as="h2" variant="h2">
            Red
          </Typography>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="red"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Red Button
            </Button>
            <Button variant="red" leftIcon={BiPlus} rightIcon={BsArrowRight}>
              Red Button
            </Button>
            <Button
              variant="red"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Red Button
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="red"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Red Disabled
            </Button>
            <Button
              variant="red"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Red Disabled
            </Button>
            <Button
              variant="red"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Red Disabled
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="red"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Red Disabled
            </Button>
            <Button
              variant="red"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Red Disabled
            </Button>
            <Button
              variant="red"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Red Disabled
            </Button>
          </div>
        </div>

        <div>
          <Typography as="h2" variant="h2">
            Outline
          </Typography>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="outline"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Outline Button
            </Button>
            <Button
              variant="outline"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Outline Button
            </Button>
            <Button
              variant="outline"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Outline Button
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="outline"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Outline Disabled
            </Button>
            <Button
              variant="outline"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Outline Disabled
            </Button>
            <Button
              variant="outline"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Outline Disabled
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="outline"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Outline Disabled
            </Button>
            <Button
              variant="outline"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Outline Disabled
            </Button>
            <Button
              variant="outline"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Outline Disabled
            </Button>
          </div>
        </div>

        <div>
          <Typography as="h2" variant="h2">
            Ghost
          </Typography>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button variant="ghost" leftIcon={BiPlus} rightIcon={BsArrowRight}>
              Ghost Button
            </Button>
            <Button
              variant="ghost"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Ghost Button
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="ghost"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Ghost Disabled
            </Button>
            <Button
              variant="ghost"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              disabled
            >
              Ghost Disabled
            </Button>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <Button
              variant="ghost"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Ghost Disabled
            </Button>
            <Button
              variant="ghost"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
              isLoading
            >
              Ghost Disabled
            </Button>
          </div>
        </div>

        <div>
          <Typography as="h2" variant="h2">
            Button Link
          </Typography>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <ButtonLink
              href="/"
              variant="blue"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Button Link
            </ButtonLink>
            <ButtonLink
              href="/"
              variant="blue"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Button Link
            </ButtonLink>
            <ButtonLink
              href="/"
              variant="blue"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Button Link
            </ButtonLink>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <ButtonLink
              href="/"
              variant="green"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Green Button Link
            </ButtonLink>
            <ButtonLink
              href="/"
              variant="green"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Green Button Link
            </ButtonLink>
            <ButtonLink
              href="/"
              variant="green"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Green Button Link
            </ButtonLink>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <ButtonLink
              href="/"
              variant="outline"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Outline Button Link
            </ButtonLink>
            <ButtonLink
              href="/"
              variant="outline"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Outline Button Link
            </ButtonLink>
            <ButtonLink
              href="/"
              variant="outline"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Outline Button Link
            </ButtonLink>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <ButtonLink
              href="/"
              variant="yellow"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Yellow Button Link
            </ButtonLink>
            <ButtonLink
              href="/"
              variant="yellow"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Yellow Button Link
            </ButtonLink>
            <ButtonLink
              href="/"
              variant="yellow"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Yellow Button Link
            </ButtonLink>
          </div>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <ButtonLink
              href="/"
              variant="ghost"
              size="lg"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Ghost Button Link
            </ButtonLink>
            <ButtonLink
              href="/"
              variant="ghost"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Ghost Button Link
            </ButtonLink>
            <ButtonLink
              href="/"
              variant="ghost"
              size="sm"
              leftIcon={BiPlus}
              rightIcon={BsArrowRight}
            >
              Ghost Button Link
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
