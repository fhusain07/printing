import Autocomplete from "@/components/ui/Autocomplete";
import Button from "@/components/ui/Button";
import ImageUpload from "@/components/ui/ImageUpload";
import TextField from "@/components/ui/TextField";
import ToggleBox from "@/components/ui/ToggleBox";
import ToggleSwitch from "@/components/ui/ToggleSwitch";
import { IAddCourseRequest } from "@/features/admin/course/adminCourse.types";
import useAddCourseForm from "@/features/admin/course/useAddCourseForm";
import { ChangeEvent } from "react";
import { twMerge } from "tailwind-merge";

interface IAddCourseProps {
  onClose: () => void;
}

const IS_SUPERADMIN_OR_ADMIN = true; // replace with actual role check

function AddCourseForm({ onClose }: IAddCourseProps) {
  const formik = useAddCourseForm(onSubmit);
  const {
    setFieldValue,
    values,
    handleChange,
    handleSubmit,
    errors,
    touched,
    handleBlur,
  } = formik;

  function onSubmit(values: IAddCourseRequest) {
    console.log({ values });
  }

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFieldValue("thumbnailImage", URL.createObjectURL(file));
    }
  };

  return (
    <ToggleBox className="max-w-2xl" title="Add Course" onClose={onClose}>
      <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
        {/* 🔼 Image Upload at Top */}
        <div className="flex items-center justify-center">
          <ImageUpload
            imageUrl={values.thumbnailImage}
            onImageChange={handleImageChange}
            onRemoveImage={() => setFieldValue("thumbnailImage", "")}
          />
        </div>

        {/* 📐 Grid Layout for Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Heading */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Course Title
            </label>
            <TextField
              className={twMerge(
                "mt-1 block w-full rounded border px-3 py-2 text-sm",
                touched.heading && errors.heading
                  ? "border-red-500"
                  : "border-gray-300",
              )}
              name="heading"
              placeholder="Course Title"
              value={values.heading}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            {touched.heading && errors.heading && (
              <p className="text-red-500 text-xs mt-1">{errors.heading}</p>
            )}
          </div>

          {/* Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Level
            </label>
            <Autocomplete
              name="level"
              options={[
                { value: "beginner", label: "Beginner" },
                { value: "intermediate", label: "Intermediate" },
                { value: "advanced", label: "Advanced" },
              ]}
              value={{
                label: values.level,
                value: values.level,
              }}
              onChange={(opt) => setFieldValue("level", opt?.value || "")}
            />
            {touched.level && errors.level && (
              <p className="text-red-500 text-xs mt-1">{errors.level}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <ToggleSwitch
                checked={values.isFree ?? false}
                label="Free"
                onChange={(e) => setFieldValue("isFree", e.target.checked)}
              />
            </div>

            {IS_SUPERADMIN_OR_ADMIN && (
              <div className="flex items-center gap-2">
                <ToggleSwitch
                  checked={values.isLock ?? false}
                  label="Lock"
                  onChange={(e) => setFieldValue("isLock", e.target.checked)}
                />
              </div>
            )}
          </div>

          {!values.isFree && (
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <TextField
                  className="mt-1 block w-full border px-3 py-2 text-sm rounded border-gray-300"
                  name="price"
                  placeholder="Enter price"
                  type="number"
                  value={values.price}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
                {touched.price && errors.price && (
                  <p className="text-red-500 text-xs mt-1">{errors.price}</p>
                )}
              </div>

              {/* Discount Percentage */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Discount Percentage
                </label>
                <TextField
                  className="mt-1 block w-full border px-3 py-2 text-sm rounded border-gray-300"
                  name="discount"
                  placeholder="Enter discount %"
                  type="number"
                  value={values.discount}
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="mt-6 flex justify-end gap-3">
          <Button type="button" variant="error" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Add Course</Button>
        </div>
      </form>
    </ToggleBox>
  );
}

export default AddCourseForm;
