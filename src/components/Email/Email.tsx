import ArrowIcon from '../../assets/icons/icon-arrow.svg';
import ErrorIcon from '../../assets/icons/icon-error.svg';
import React, { useState } from "react"

export function Email() {
  const [email, setEmail] = useState<string>("");
  const [hasError, setHasError] = useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasError(email.length > 0 && !e.currentTarget.checkValidity());
  }

  return (
    <>
      <div className="relative mt-10">
        <input
          id="emailInput"
          type="email"
          required minLength={4}
          onBlur={handleBlur}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={`
            py-3 px-5
            w-full
            rounded-3xl
            border
            text-(--text-pink)
            focus:outline-0
            focus:border-2
            ${hasError
              ? 'border-red-400 border-2'
              : 'border-(--border)'
            }
          `}
        />
        <label
          className={`
            absolute top-1/2 
            text-(--text-pink) 
            transition-transform
            duration-200
            ${email
              ? '-translate-y-[150%] left-5 text-(--text-pink-faded) px-1 rounded-lg bg-[#FFF9F9] border border-(--border)'
              : '-translate-y-1/2 px-5 left-0'
            }
            ${email && hasError 
              ? 'border border-red-400'
              : ''
            }
            `
        
          }
          htmlFor="emailInput"
        >
          Email Address
        </label>
        <button
          type='submit'
          aria-label='Submit email'
          className='absolute bg-amber-300 right-0 top-1/2 rounded-3xl -translate-y-1/2 px-10 h-full cursor-pointer bg-linear-to-br from-(--btn-gradiant-from) to-(--btn-gradiant-to) hover:opacity-85 transition-opacity duration-150'
        >
          <img src={ArrowIcon} />
        </button>
        {hasError && (
          <img className='absolute right-25 top-1/2 -translate-y-1/2' src={ErrorIcon} alt="email-error-icon" />
        )}
      </div>
      {hasError && (
        <p className='px-5 py-2 text-red-400'>Please provide a valid email!</p>
      )}
    </>
  )
}